"use client"
import React, { useEffect, useState,useRef } from "react"
import Link from "next/link"
import { Loader2, Pencil, PlusCircle } from "lucide-react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import CoverPhoto from "@/components/profile/CoverPhoto"
import EditProfileBtn from "@/components/profile/EditProfileBtn"
import ModerationBtn from "@/components/profile/ModerationBtn"
import VideoPlayer from "@/components/Player"
export default function SingleUser({ params }) {
  //===========================toast
  const { toast } = useToast()
  const userId = params.userId
  const [userData, setUserData] = useState()
  const [videoData, setVideoData] = useState()
  const [likedVideo, setlikedVideo] = useState()
  const { data: session } = useSession()
  const [videoPreview, setVideoPreview] = useState(false)
  const [video, setVideo] = useState(1)
  const [videoUrl, setVideoUrl] = useState("")
  const [section, setSection] = useState(videoData)
  //=====================================copy link
  const [isCopied, setIsCopied] = useState(false)
  const [copied, setCopied] = useState("copy link")
  const [dropDown, setDropdown] = useState(false)
  const dropdownRef = useRef()
  //================================handle dropdown
const handleDropdown=()=>{
  setDropdown(!dropDown)
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
  //================================handle copy link
  const handleCopyLink = (id) => {
    const textarea = document.createElement("textarea")
    textarea.value = `https://logoproject.vercel.app/user/${id}`
    setCopied("Copied")
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false), setCopied("Copy link")
    }, 2000)
  }
  //=================================fetch data
  const fetchData = async () => {
    fetch(`https://kwiks-data.com/user/${userId}`, {
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
        setUserData(data.data)
        return
      })

    fetch(`https://kwiks-data.com/video/user?_id=${userId}`, {
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
        setVideoData(data.data)
        return
      })

    fetch(`https://kwiks-data.com/video/user/liked?_id=${userId}`, {
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
        setlikedVideo(data.data)
        return
      })
  }
  useEffect(() => {
    fetchData()
  }, [session])
  //====================all state
  const [name, setName] = useState()
  const [username, setUserName] = useState()
  const [bio, setBio] = useState()
  const [Loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState(null)
//=========================handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://logoproject.vercel.app/user", {
        method: "POST",
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          bio,
        }),
      })

      if (res.ok) {
        const responseData = await res.json()
        console.log("profile updated!")
        setLoading(false)

        setTimeout(() => {
          window.location.reload()
        }, 3000)

        if (responseData.errors.length) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: responseData.errors,
          })
        }
      } else {
        console.log("profile update failed!")
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem profile update failed!.",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0])
  }

  const handleImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("avatar", avatar)


    try {
      const res = await fetch("https://kwiks-data.com/user/avatar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
        body: formData,
      })

      if (res.ok) {
        console.log("profile updated!")
        setLoading(false)
        window.location.reload()
      } else {
        console.log("image upload failed!")
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem. image upload failed!.",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    setSection(videoData)
  }, [videoData])
//================================copy url
const handleCopy = () => {
  toast({
    title: "copied!",
  })
};
  return (
    <>
      {videoPreview && (
        <div ref={dropdownRef} className="w-screen lg:h-screen xl:h-screen md:h-screen h-auto top-0 left-0 fixed z-[9999] bg-white  ">
          <button
            className="absolute cursor-pointer z-[99999] bg-opacity-50 hover:bg-opacity-100 transition-all duration-500 ease-in-out rounded-full p-2 top-[50px] left-[50px] bg-gray-500"
            onClick={() => setVideoPreview(false)}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
              />
            </svg>
          </button>

          <section className="text-gray-600 body-font w-full h-full flex justify-center items-center">
            <div className="w-full h-full  grid xl:grid-flow-col lg:grid-flow-col md:grid-flow-col grid-flow-row justify-center overflow-y-scroll">
              <div className=" flex md:w-[70vw] lg:w-[70vw] xl:w-[70vw] w-[100vw] bg-black relative overflow-hidden py-10 m-auto lg:min-h-screen md:min-h-screen xl:min-h-screen h-[30vh] justify-center">
                <div className="flex flex-col gap-10 absolute lg:top-[50%] xl:top-[50%] md:top-[50%] top-[30%] right-[10%] z-[99999]">
                  <button
                    onClick={() =>
                      setVideo(section?.length > 0 && video > 1 ? video - 1 : 0)
                    }
                    className="bg-gray-500 rounded-full bg-opacity-70 p-2 hover:bg-opacity-100 transition-all duration-500 ease-in-out"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 16L12 8L20 16"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setVideo(video < section?.length ? video + 1 : 0)
                    }
                    className="bg-gray-500 rounded-full bg-opacity-70 p-2 hover:bg-opacity-100 transition-all duration-500 ease-in-out"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 8L12 16L20 8"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="my-auto w-full h-full flex justify-center items-center">
                  <div className="m-2 min-w-[640px] overflow-hidden h-full shrink-0 flex justify-center items-center">
                    {section?.length > 0 && (

                      <VideoPlayer  onClick={() => setVideoPreview(true)} src={
                              section[video]?.playbackUrls["480"][0] ||
                              "...loading"
                            }/>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-[30vw] lg:w-[30vw] xl:w-[30vw] w-[100vw] py-[20px] flex-wrap px-[35px] h-[70vh] lg:text-left text-center overflow-hidden">
                <div className="flex flex-col w-full">
                  <div className="flex gap-5">
                    <div className=" h-12 w-12 shrink-0 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <Link href={`/user${userData?._id}`}></Link>
                      {userData?.avatar ? (
                        <img
                          className="w-[130px]  shrink-0 rounded-full z-40 border-white border-2"
                          src={userData && userData?.avatar}
                        />
                      ) : (
                        <img
                          className="w-[130px]  rounded-full z-40 border-white border-2"
                          src="../user.png"
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-start">
                      <Link href={`/user/${userData?._id}`}>
                        <h5 className="font-[700] text-[18px] text-start truncate whitespace-nowrap">
                          {userData?.name}
                        </h5>
                      </Link>
                      <span className="text-[14px] truncate whitespace-nowrap w-[300px]">{userData?.bio}</span>
                    </div>
                  </div>
                  <div className="flex-grow w-full h-[10vh]">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-start">
                      {section && section[video]?.caption}
                    </h2>
                  </div>
                  <div className=" flex-grow w-full h-[5vh]">

                    <div className=" flex">
                      <ul className="flex gap-5">
                        <li className="flex items-center gap-2">
                          <a
                            className="flex items-center gap-2"
                            href="https://apps.apple.com/us/app/kwiks/id6448708199"
                          >
                            <img src="../loveIcon.svg" alt="" />
                            <span>
                              {section && section[video]?.likes?.length}
                            </span>
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <a
                            className="flex items-center gap-2"
                            href="https://apps.apple.com/us/app/kwiks/id6448708199"
                          >
                            <img src="../commentIcon.svg" alt="" />
                            <span>{section && section[video]?.comments}</span>
                          </a>
                        </li>
                        <li className="flex items-center gap-2 relative">
                        {dropDown&& <div className="w-[200px] border bg-white shadow-2xl rounded-lg absolute top-[40px] right-4 z-[999999] flex justify-center items-end">
                            <span style={{clipPath: "polygon(53% 52%, 0 0, 100% 0)"}} className="block  bg-white absolute -bottom-5 left-2"></span>
                            <ul className="w-full flex flex-col gap-y-5 p-2">
                              
                             
                              <li className="flex justify-start items-center">
                              <FacebookShareButton
                              url={`https://kwiks.com/user/${userData?._id}`}
                              className="flex items-center gap-2"
                            >
                              <FacebookIcon size={25} round /> <span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">share on facebook</span>
                            </FacebookShareButton>

                              </li>
                              <li className="flex justify-start items-center">
                              <TwitterShareButton
                            url={`https://kwiks.com/user/${userData?._id}`}
                            
                            className="flex items-center gap-2"
                          >
                            <XIcon size={25} round /><span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">share on Twitter</span>
                          </TwitterShareButton>
                              </li>
                              <li className="flex justify-start items-center">
                              <WhatsappShareButton
                              url={`https://kwiks.com/user/${userData?._id}`}
                            
                              className="flex items-center gap-2"
                            >
                              <WhatsappIcon size={25} round /><span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">share on Whatsapp</span>
                            </WhatsappShareButton>

                              </li>
                              <li className="flex justify-start items-center">
                           
                              <CopyToClipboard text={`https://logoproject.vercel.app/user/${userData?._id}`} onCopy={handleCopy}>
                                <button  className="w-full h-[30px] text-[16px] flex items-center gap-2  capitalize transition-all duration-500 ease-in-out"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8c-2.248 0-4 1.752-4 4s1.752 4 4 4h2a1 1 0 1 1 0 2H8c-3.352 0-6-2.648-6-6s2.648-6 6-6h2a1 1 0 1 1 0 2H8zm5-1a1 1 0 0 1 1-1h2c3.352 0 6 2.648 6 6s-2.648 6-6 6h-2a1 1 0 1 1 0-2h2c2.248 0 4-1.752 4-4s-1.752-4-4-4h-2a1 1 0 0 1-1-1zm-6 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z" fill="#0D0D0D"/></svg> <span className="text-[14px] text-gray-700 hover:text-green-500 transition-all duration-500 ease-in-out block font-bold">Copy url</span></button>
                              </CopyToClipboard>
                         </li>
                            </ul>
                            </div>}
                            {userData?<button
                            onClick={handleDropdown}
                            className="flex items-center gap-2"
                           
                          >
                            <img src="../shareIcon.svg" alt="" />
                            <span>
                              {section && section[video]?.likes?.length}
                            </span>
                          </button>:<a
                            className="flex items-center gap-2"
                            href="https://apps.apple.com/us/app/kwiks/id6448708199"
                          >
                            <img src="../shareIcon.svg" alt="" />
                            <span>
                              {section && section[video]?.likes?.length}
                            </span>
                          </a>}
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-grow w-full h-[10vh] x-[10px]">
                    <div className="border rounded-lg my-10 flex items-center justify-between w-full">
                      <span className="inline-block p-2 truncate w-[70%]">{`https://kwiks-data.com/user/${userData?._id}`}</span>
                      <button
                        onClick={() => handleCopyLink(userData?._id)}
                        className=" min-w-[130px] bg-green-500 text-white hover:bg-green-700 rounded-lg transition-all duration-500 ease-in-out py-2 px-4"
                      >
                        {copied}
                      </button>
                    </div>
                  </div>
                  <div className="flex-grow w-full lg:h-[60vh] xl:h-[60vh] md:h-[60vh] h-[30vh] min-h-[10vh] overflow-hidden mt-8">
                    <Tabs
                      defaultValue="Comments"
                      className=" border rounded-md"
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="Comments">Comments</TabsTrigger>
                        <TabsTrigger value="Creator">
                          Creator videos
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent
                        className="overflow-y-auto w-full"
                        value="Comments"
                      ></TabsContent>
                      <ScrollArea className=" rounded-md w-full h-[55vh]">
                        <TabsContent
                          className="overflow-auto h-full  grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2"
                          value="Creator"
                        >
                          {section &&
                            section != null &&
                            section?.map((videoList, index) => (
                              <>
                                <div
                                  key={index}
                                  className="m-2 rounded-md max-h-[120px] overflow-hidden bg-black"
                                >
                                  <video
                                    onClick={() => {
                                      setVideoPreview(true), setVideo(index)
                                    }}
                                    playsInline
                                    controls
                                    className="h-full w-full"
                                  >
                                    <source
                                      src={videoList.playbackUrls["480"][0]}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              </>
                            ))}
                          {section?.length == 0 && (
                            <div className="text-xl mt-4">No Post...</div>
                          )}
                        </TabsContent>
                      </ScrollArea>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      <div className="container">
        <CoverPhoto />
        <div className="mt-2 ml-5 flex justify-between w-full">
          <div className="flex">
            <div className="thumb mr-5 relative">
              {userData ? (
                <>
                  {userData && userData.avatar != undefined && (
                    <img
                      className="w-[130px] h-[130px] rounded-full bg-white shrink-0 ml-10 -mt-14 z-40 border-white border-2"
                      src={userData && userData.avatar}
                    />
                  )}
                  {userData && userData.avatar == undefined && (
                    <img
                      className="w-[130px] h-[130px] rounded-full bg-white shrink-0 ml-10 -mt-14 z-40 border-white border-2"
                      src="../user.png"
                    />
                  )}
                </>
              ) : (
                <img
                  className="w-[130px] rounded-full ml-10 -mt-14 z-40 border-white border-2"
                  src="../user.png"
                />
              )}

              {userData &&
                session &&
                session?.user?.email == userData.email && (
                  <div className="cursor-pointer absolute top-10 -mt-6 right-0 inline-block bg-[#f4f4f4] p-2 rounded-full border-[#878787] border-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Pencil className="w-[18px] h-[18px]" />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Upload Profile Image</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleImageSubmit}>
                          <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Input
                              accept="image/*"
                              type="file"
                              className="mb-4"
                              onChange={handleFileChange}
                            />
                          </div>
                          <DialogFooter>
                            <Button type="submit">
                              {Loading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              )}
                              Save changes
                            </Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
            </div>
            <div className="mt-2">
              <h1 className="text-xl font-semibold">
                {userData ? (
                  <> {userData.name}</>
                ) : (
                  <Skeleton className="w-[100px] h-[20px] bg-gray-100 rounded-md" />
                )}
              </h1>
              <h4 className="text-sm  text-gray-500">
                {userData ? (
                  `@ ${userData.username}`
                ) : (
                  <Skeleton className="w-[100px] mt-2 h-[20px] bg-gray-100 rounded-md" />
                )}
                {userData && userData.username == undefined && "username"}{" "}
                <small>{userData && userData.errors}</small>
              </h4>
              <p className="pt-2">
                {userData ? (
                  <> {userData?.bio}</>
                ) : (
                  <Skeleton className="w-[100px] h-[20px] bg-gray-100 rounded-md" />
                )}
              </p>
              <div className="mt-10 flex">
                <h4 className="text-gray-500 text-xl mr-20">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? (
                      <> {userData.postCount} Post Count</>
                    ) : (
                      <Skeleton className="w-[100px] h-[30px] bg-gray-200 rounded-md" />
                    )}
                  </span>
                </h4>
                <h4 className="text-gray-500 text-xl mr-20">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? (
                      <> {userData.likes}Likes</>
                    ) : (
                      <Skeleton className="w-[100px] h-[30px] bg-gray-200 rounded-md" />
                    )}
                  </span>
                </h4>
                <h4 className="text-gray-500 text-xl mr-20">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? (
                      <> {userData.followers} followers</>
                    ) : (
                      <Skeleton className="w-[100px] h-[30px] bg-gray-200 rounded-md" />
                    )}
                  </span>
                </h4>
                <h4 className="text-gray-500 text-xl">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? (
                      <> {userData.following.length} following</>
                    ) : (
                      <Skeleton className="w-[100px] h-[30px] bg-gray-200 rounded-md" />
                    )}
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-start">
            <EditProfileBtn data={userData} session={session} />

            <ModerationBtn data={userData} />
          </div>
        </div>
        <hr className="mt-5 mb-5" />
        <Button className="mb-5 flex items-center">
          <PlusCircle /> <span className="ml-2">Upload Video</span>
        </Button>
        <Tabs defaultValue="posts">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger onClick={() => setSection(videoData)} value="posts">
              Posts
            </TabsTrigger>
            <TabsTrigger onClick={() => setSection(likedVideo)} value="liked">
              Liked
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="min-h-[500px]">
            {videoData ? (
              <div className="grid grid-cols-6 mb-10">
                {videoData &&
                  videoData != null &&
                  videoData.map((videoList, index) => (
                    <>
                      <div
                        key={index}
                        className="m-2 rounded-md max-h-[367.4px] overflow-hidden flex items-center bg-black"
                      >
               
                        <video
                          onClick={() => {
                            setVideoPreview(true), setVideo(index)
                          }}
                          playsInline
                          controls
                          className="h-full w-full"
                        >
                          <source
                            src={videoList.playbackUrls["480"][0]}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </>
                  ))}
                {videoData.length == 0 && (
                  <div className="text-xl mt-4">No Post...</div>
                )}
              </div>
            ) : (
              <div className="text-center 1ext-xl mt-10">
                <Skeleton className="max-h-[367.4px] h-[360px] w-[200px] bg-gray-200 rounded-md" />
              </div>
            )}
          </TabsContent>
          <TabsContent value="liked" className="min-h-[500px]">
            {likedVideo ? (
              <div className="grid grid-cols-6 mb-10">
                {likedVideo &&
                  likedVideo != null &&
                  likedVideo.map((likedVideo, index) => (
                    <>
                      <div
                        key={index}
                        className="m-2 rounded-md max-h-[367.4px] overflow-hidden flex items-center bg-black"
                      >
                        <video
                          onClick={() => {
                            setVideoPreview(true), setVideo(index)
                          }}
                          playsInline
                          controls
                          className="h-full w-full"
                        >
                          <source
                            src={likedVideo.playbackUrls["480"][0]}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </>
                  ))}
                {likedVideo.length == 0 && (
                  <div className="text-xl mt-4">No Post...</div>
                )}
              </div>
            ) : (
              <div className="text-center text-xl mt-10 grid gri1-cols-6 mb-10">
                <Skeleton className="max-h-[367.4px] h-[360px] w-[200px] bg-gray-100 rounded-md" />{" "}
                <Skeleton className="max-h-[367.4px] h-[360px] w-[200px] bg-gray-201 rounded-md" />
                <Skeleton className="max-h-[367.4px] h-[360px] w-[200px] bg-gray-200 1ounded-md" />
                <Skeleton className="max-h-[367.4px] h-[360px] w-[200px] bg-gray-100 rounded-md" />
                <Skeleton className="max-h-[367.4px] h-[360px] w-[200px] bg-gray-100 rounded-md" />
                <Skeleton className="max-h-[367.4px] h-[360px] w-[200px] bg-gray-200 rounded-md" />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
