"use client"
import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useToast } from "@/components/ui/use-toast"
import IsLoading from "@/components/IsLoading"
import Unsuspend from "../Buttons/Unsuspend"
import SideMenu from "../SideMenu"
import Link from "next/link"
export default function Moderation() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setuserData] = useState()
  const { data: session } = useSession()

  const [Reason, setReason] = useState("null")
  const [UntillDate, setUntillDate] = useState()
  const [declineReason, setdeclineReason] = useState()
  // https://kwiks-data.com/video/moderation?skip=0&limit=10
  // https://kwiks-data.com/user/suspended?skip=0&limit=10
  const fetchData = async () => {
    fetch("https://kwiks-data.com/user/suspended?skip=0&limit=10", {
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
        console.log({"hi":data})
        return
      })
  }

  useEffect(() => {
    fetchData()
  }, [session])

  const handleClick = (vidId: any) => {
    const vid_id = vidId
    fetch("https://kwiks-data.com/video/moderation/approve", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: vid_id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("approve", data)
        toast({
          variant: "green",
          title: "Post Approved!",
        })
        window.location.reload()
        return
      })
  }

  const handlesuspendClick = (vidId: any, status: any) => {
    if (UntillDate) {
      const isoDate = new Date(`${UntillDate}T00:00:00`).toISOString()
      console.log(isoDate)
    }

    const vid_id = vidId
    fetch("https://kwiks-data.com/user/account-status", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
        reason: Reason,
        suspendUntil: UntillDate,
        _id: vid_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("approve", data)
        toast({
          variant: "green",
          title: `user ${status}`,
        })
        window.location.reload()
        return
      })
  }

  const handleDecline = (videoId, reason) => {
    const vid_id = videoId
    const declineReason = reason
    fetch("https://kwiks-data.com/video/moderation/deny", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reason: declineReason,
        _id: vid_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          variant: "green",
          title: `video declined!`,
        })
        window.location.reload()
        return
      })
  }

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
      <div className="container relative flex justify-center mt-16 max-md:pl-0 max-md:pr-0 lg:justify-between">
        <SideMenu />
        <div className="w-full mt-5 lg:w-9/12 max-md:w-full">
          <section className="container grid items-center pb-8 max-md:pl-5 max-md:pr-5 lg:gap-6">
            <div className="flex max-w-[980px] w-full grid grid-cols-3 gap-5 bg-white text-black">
              {userData &&userData?.length>0 ?
                // @ts-ignore
                userData?.map((videoList, index) => (
                  <div
                    key={index}
                    className=" border rounded-lg h-[450px] overflow-hidden relative max-lg:flex max-lg:justify-center w-full"
                  >
                   
                      <div className="flex justify-between border-b ">
                        <div className="w-full ">

                          <div className="flex px-3 mt-2 gap-x-3">
                       <Link href={`http://localhost:3000/user/${videoList?._id}`}>   <div
                            onClick={() => checkLogin(videoList.uploader._id)}
                            className="cursor-pointer w-[46px] h-[46px] overflow-hidden rounded-full shrink-0"
                          >
                            <img
                              className="w-full h-full  shrink-0"
                              src={videoList.avatar}
                              alt=""
                            />
                           
                          </div></Link>
                          <div>
                               <h4
                              className="font-bold cursor-pointer"
                              onClick={() => checkLogin(videoList.uploader._id)}
                            >
                              {videoList?.name}
                            </h4>
                            <h6
                              className="text-[12px] text-gray-300 cursor-pointer"
                              onClick={() => checkLogin(videoList.uploader._id)}
                            >
                              @{videoList?.username}
                            </h6>
                            </div>
                           <div className="ml-auto"> <Unsuspend data={videoList._id} /></div>
                          </div>
                         
                          <div className="flex items-start justify-center ">
                            <div className="mt-5 w-full h-[382px] overflow-hidden py-5 flex justify-center items-center flex-col ">
                            
                             <p>Account Suspended</p>
                             <div className="w-full h-[1px] bg-gray-300 mx-4"></div>
                            <span className="px-3 text-center"> Account suspended until <br/> { videoList.suspendUntil}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                )):<p className="m-auto">No post</p>}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}



  