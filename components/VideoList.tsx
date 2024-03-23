"use client"
import { useEffect, useState,useRef } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { Skeleton } from "@/components/ui/skeleton"
import Player from "@/components/Player"
import FollowButton from "./FollowButton"
import { useToast } from "./ui/use-toast"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";
export default function VideoList() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
const {toast} = useToast()
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }
  const toggleMuteUnmute = () => {
    setIsMuted(!isMuted)
  }
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [dropDown, setDropdown] = useState(false)
  const [dropId, setDropId] = useState(null)
  const [error, setError] = useState(null)
  const { data: session } = useSession()
  const dropdownRef = useRef(null);
  const urlToCopyRef = useRef(null);
  //===========================================fetch video
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://kwiks-data.com/video?type=popular&limit=20",
        { cache: "force-cache" }
      )
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await response.json()
      const shuffledData = shuffleArray(data.data)
      setData(shuffledData)

      setIsLoading(false)
    } catch (error: any) {
      setError(error.message)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [session])
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  }

//================================handle dropdown
const handleDropdown=(id)=>{
  setDropdown(!dropDown)
  setDropId(id)
}
//=======================================dropdown menu
const handleClickOutside = (event) => {

  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setDropdown(false);
  }
};
useEffect(() => {
  document.addEventListener('click', handleClickOutside);

  return () => document.removeEventListener('click', handleClickOutside)
}, []);
  const checkLogin = (id) => {
    const url = "/user/" + id
    if (session?.user?.token) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      if (newWindow) newWindow.opener = null
    } else {
    }
  }
//=============================loader
  if (isLoading) {
    return (
      <>
        <div className="flex justify-between items-center w-[70%] mt-10">
          <div className="flex items-center justify-between w-full">
            <Skeleton className="h-12 w-12 rounded-full shrink-0" />
            <div className="space-y-2 w-[100px] mr-auto">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div>
            <Skeleton className="h-8 w-[70px] rounded-full" />
          </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[70%] mt-5">
            <Skeleton className="h-[30px] w-[300px] mb-3" />
        <div className="flex items-end gap-x-5 w-full">
            <Skeleton className="h-[520px] w-[500px]" />
            <div className="flex flex-col gap-y-3">
              <Skeleton className="h-[60px] w-[40px]" />
              <Skeleton className="h-[60px] w-[40px]" />
              <Skeleton className="h-[60px] w-[40px]" />
            </div>
          </div>
        </div>
        {/* part 2  */}
        <div className="flex justify-between items-center w-[70%] mt-10">
          <div className="flex items-center justify-between w-full">
            <Skeleton className="h-12 w-12 rounded-full shrink-0" />
            <div className="space-y-2 w-[100px] mr-auto">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div>
            <Skeleton className="h-8 w-[70px] rounded-full" />
          </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[70%] mt-5">
            <Skeleton className="h-[30px] w-[300px] mb-3" />
        <div className="flex items-end gap-x-5 w-full">
            <Skeleton className="h-[520px] w-[500px]" />
            <div className="flex flex-col gap-y-3">
              <Skeleton className="h-[60px] w-[40px]" />
              <Skeleton className="h-[60px] w-[40px]" />
              <Skeleton className="h-[60px] w-[40px]" />
            </div>
          </div>
        </div>
        
      </>
    )
  }
  //================================copy url
  const handleCopy = () => {
    toast({
      variant: "outline",
      title: "Url copied!",
    })
  };
  return (
    <div ref={dropdownRef}> 
      {data &&
        data.map((videoList: any, index: any) => (
          <div 
            key={index}
            className="mb-[20px] relative max-lg:flex max-lg:justify-center"
          >
            <div className="flex justify-between border-b pb-10 mt-5 max-lg:w-10/12 max-md:w-full">
              <div className="flex items-start">
                <div
                  onClick={() => checkLogin(videoList.uploader._id)}
                  className="cursor-pointer"
                >
                  <img
                    className="w-[46px] min-w-[46px] flex h-[46px] rounded-full shrink-0"
                    src={videoList.uploader?.avatar}
                    alt=""
                  />
                </div>
                <div className="ml-2">
                  <div className="flex">
                    <div>
                      <h4
                        className="font-bold cursor-pointer"
                        onClick={() => checkLogin(videoList.uploader._id)}
                      >
                        {videoList.uploader?.name}
                      </h4>
                      <h6
                        className="text-[12px] text-gray-300 cursor-pointer"
                        onClick={() => checkLogin(videoList.uploader._id)}
                      >
                        @{videoList.uploader?.username}
                      </h6>
                      <div className="caaption mt-4 w-[300px]">
                        <p>{videoList.caption}</p>
                      </div>
                    </div>
                    <div className="followBtn max-sm:hidden">
                      <FollowButton uploaderId={videoList?.uploader?._id} uploaderName={videoList?.uploader?.name} />
                    </div>
                  </div>
                  <div className="mt-5 flex items-end">
                    <div>
                      <Player
                      src={videoList.playbackUrls["480"][0]}
                      poster={videoList.thumbnailUrl}
                    />
                    </div>
                    <div className="reaction-wrap flex items-end pl-5">
                      <ul className="[&>li]:pt-5 [&>li]:text-[11px] [&>li]:text-center">
                      <li className=" shrink-0 ">
                          <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                            <img src="./loveIcon.svg" alt="" />
                            <span>{videoList.likes.length}</span>
                          </Link>
                        </li>
                        <li className="  shrink-0  ">
                          <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                            <img src="./commentIcon.svg" alt="" />
                            <span>{videoList.comments}</span>
                          </Link>
                        </li>
                        <li className="relative">
                          {dropDown&& dropId===videoList?._id && <div className="w-[200px] border bg-white shadow-2xl rounded-lg absolute bottom-[70px] left-0 z-[999999] flex justify-center items-end">
                            <span style={{clipPath: "polygon(53% 52%, 0 0, 100% 0)"}} className="block  bg-white absolute -bottom-5 w-5 h-5 left-2"></span>
                            <ul className="w-full flex flex-col gap-y-5 p-2">
                              
                             
                              <li className="flex justify-start items-center">
                              <FacebookShareButton
                              url={`https://kwiks.com/user/${videoList?.uploader?._id}`}
                              className="flex items-center gap-2"
                            >
                              <FacebookIcon size={25} round /> <span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">share on facebook</span>
                            </FacebookShareButton>

                              </li>
                              <li className="flex justify-start items-center">
                              <TwitterShareButton
                            url={`https://kwiks.com/user/${videoList?.uploader?._id}`}
                            
                            className="flex items-center gap-2"
                          >
                            <XIcon size={25} round /><span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">share on Twitter</span>
                          </TwitterShareButton>
                              </li>
                              <li className="flex justify-start items-center">
                              <WhatsappShareButton
                              url={`https://kwiks.com/user/${videoList?.uploader?._id}`}
                            
                              className="flex items-center gap-2"
                            >
                              <WhatsappIcon size={25} round /><span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">share on Whatsapp</span>
                            </WhatsappShareButton>

                              </li>
                              <li className="flex justify-start items-center">
                           
                           <CopyToClipboard text={`http://localhost:3000/user/${videoList?.uploader?._id}`} onCopy={handleCopy}>
                             <button  className="w-full h-[30px] text-[16px] flex items-center gap-2  capitalize transition-all duration-500 ease-in-out"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8c-2.248 0-4 1.752-4 4s1.752 4 4 4h2a1 1 0 1 1 0 2H8c-3.352 0-6-2.648-6-6s2.648-6 6-6h2a1 1 0 1 1 0 2H8zm5-1a1 1 0 0 1 1-1h2c3.352 0 6 2.648 6 6s-2.648 6-6 6h-2a1 1 0 1 1 0-2h2c2.248 0 4-1.752 4-4s-1.752-4-4-4h-2a1 1 0 0 1-1-1zm-6 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z" fill="#0D0D0D"/></svg> <span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">Copy url</span></button>
                           </CopyToClipboard>
                         </li>
                            </ul>
                            </div>}
                          {data?  <button  onClick={(e)=>handleDropdown(videoList?._id)} >
                            <img src="./shareIcon.svg" alt="" />
                            <span>11</span>
                          </button> :<Link  href="https://apps.apple.com/us/app/kwiks/id6448708199">
                            <img src="./shareIcon.svg" alt="" />
                            <span>11</span>
                          </Link>   }
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
