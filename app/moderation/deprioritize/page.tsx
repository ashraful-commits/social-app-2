"use client"

import React, { useEffect, useState,useRef } from "react"
import { useSession } from "next-auth/react"

import { useToast } from "@/components/ui/use-toast"
import IsLoading from "@/components/IsLoading"
import Player from "@/components/Player"

import Decline from "../Buttons/Decline"
import Prioritize from "../Buttons/Prioritize"
import Suspend from "../Buttons/Suspend"
import Unsuspend2 from "../Buttons/Unsuspend2"
import SideMenu from "../SideMenu"
import VideoPlayer from"@/components/Player"
export default function Moderation() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setuserData] = useState()
  const { data: session } = useSession()

  const [Reason, setReason] = useState("null")
  const [UntillDate, setUntillDate] = useState()
  const [declineReason, setdeclineReason] = useState()
  const [dropDown, setDropDown] = useState()
  const [dropId, setDropId] = useState()
  const [dropDownMenu, setDropdownMenu] = useState(false)
  const dropdownRef= useRef()
  const dropRef= useRef()

  //===============================================dropdown

const handleDropdown=(id)=>{
 
  setDropdownMenu(!dropDownMenu)
  setDropId(id)
}
//=======================================dropdown menu
const handleClickOutside = (event) => {

  if (dropdownRef.current && !dropRef.current && !dropdownRef.current.contains(event.target)) {
    setDropdownMenu(false);
  }
};
useEffect(() => {
  document.addEventListener('click', handleClickOutside);

  return () => document.removeEventListener('click', handleClickOutside)
}, []);
  const fetchData = async () => {
    fetch("https://kwiks-data.com/video/moderation?skip=0&limit=10", {
      method: "GET",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setuserData(data.data)
        console.log(data)
        return
      })
  }

  useEffect(() => {
    fetchData()
  }, [session])

  const checkLogin = (id) => {
    const url = "/user/" + id
    if (session?.user?.token) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      if (newWindow) newWindow.opener = null
    } else {
    }
  }

  if (isLoading) {
    return <IsLoading />
  }


  return (
    <>
      <div ref={dropdownRef} className="max-md:pl-0 max-md:pr-0 container flex relative justify-center lg:justify-between mt-16">
        <SideMenu />
        <div className="lg:w-9/12 w-full max-md:w-full">
          <section className="max-md:pl-5 max-md:pr-5 mt-10 container flex items-center lg:gap-6 pb-8">
            <div className=" max-w-[980px] w-full  grid grid-cols-3 items-start gap-5 bg-white text-black">
              {userData &&
                // @ts-ignore
                userData.map((videoList, index) => (
                  <div
                    key={index}
                    className=" border rounded-lg h-[450px] overflow-hidden relative max-lg:flex max-lg:justify-center w-full "
                  >
                    {videoList.status == "deprioritized" && (
                      <div className="flex justify-between  border-b  ">
                        <div className=" w-full">

                          <div className="flex px-3 gap-x-3 mt-2">
                          <div
                            onClick={() => checkLogin(videoList.uploader._id)}
                            className="cursor-pointer w-[46px] h-[46px] overflow-hidden rounded-full shrink-0"
                          >
                            <img
                              className=" shrink-0 w-full h-full"
                              src={videoList.uploader?.avatar}
                              alt=""
                            />
                           
                          </div>
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
                            </div>
                            <button onClick={()=>handleDropdown(videoList?.uploader?._id)} className="ml-auto">  <svg
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 293.5 293.5"
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <g>
                                              <path d="M171.603,0h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705
                                                c8.612,0,15.618-7.006,15.618-15.618V15.618C187.221,7.006,180.215,0,171.603,0z"/>
                                              <path d="M171.603,106.279h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705
                                                c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,113.285,180.215,106.279,171.603,106.279z"/>
                                              <path d="M171.603,212.559h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705
                                                c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,219.564,180.215,212.559,171.603,212.559z"/>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      </button>
                          </div>
                         
                          <div className=" flex justify-center items-start">
                            <div className="mt-5 w-full h-[382px] overflow-hidden py-5 flex justify-center items-center flex-col ">
                            {(videoList?.playbackUrls["480"] && videoList.playbackUrls["480"][0]) ? (
                                    <video controls className="w-full h-full" src={videoList.playbackUrls["480"][0]}></video>
                                  ) : (
                                    (videoList?.playbackUrls["720"] && videoList.playbackUrls["720"][0]) ? (
                                      <video controls className="w-full h-full" src={videoList.playbackUrls["720"][0]}></video>
                                    ) : (
                                      (videoList?.playbackUrls["1080"] && videoList.playbackUrls["1080"][0]) && (
                                        <video controls className="w-full h-full" src={videoList.playbackUrls["1080"][0]}></video>
                                      )
                                    )
                                  )}
                           {dropDownMenu&& dropId===videoList?.uploader?._id&&  <div  ref={dropRef} className=" absolute top-16 bg-white rounded-md border shadow-2xl p-3 right-1 flex flex-col justify-center ml-5 max-md:mt-5">
                           <span style={{clipPath: "polygon(51% 12%, 0% 100%, 100% 100%)"}} className="block w-5 h-5  border bg-gray-100 absolute shadow-xl -top-5 right-2 "></span>
                                {/* Prioritize button */}
                                <Prioritize ref={dropRef} videoList={videoList._id} />

                                {/* Decline button */}
                                <Decline ref={dropRef}  videoList={videoList} />

                                {/* Suspend button */}
                                <Suspend ref={dropRef} videoList={videoList} />

                                {/* Unsuspend button */}
                                <Unsuspend2 ref={dropRef} videoList={videoList} />
                              </div>}
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
