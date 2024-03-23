"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"
import { AlignLeft, Search, Volume2, VolumeX, X } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"

import Login from "./Login"
import MobilePlayer from "./MobilePlayer"
import Popup from "./Popup"
import Sidebar from "./Sidebar"
import MobileLoader from "./mobileUi/MobileLoader"

export default function MobileList(props) {
  const router = useRouter()
  const [userData, setuserData] = useState()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { data: session } = useSession()
  const [limit, setLimit] = useState(30)

  const [activeSlide, setActiveSlide] = useState(0) // Track active slide index

  const [isMuted, setIsMuted] = useState(true)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    if (session) {
      fetch("https://kwiks-data.com/user", {
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
          setuserData(data.data)
          return
        })
    }
  }, [session?.user?.token])

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://kwiks-data.com/video?type=popular&limit=${limit}`,
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
      console.log(error.message)
      setIsLoading(false)
    }
  }

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

  useEffect(() => {
    fetchData()
  }, [limit])

  const [isToggled, setIsToggled] = useState(false)

  const toggleClass = () => {
    setIsToggled(!isToggled)
  }

  const checkLogin = (id) => {
    const url = "/user/" + id
    if (session?.user?.token) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      if (newWindow) newWindow.opener = null
    } else {
    }
  }

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex)
  }

  if (isLoading) {
    return <MobileLoader />
  }

  return (
    <>
      <div className="w-full relative h-[100dvh] overflow-hidden">
        <div className="absolute left-0 top-0 w-full z-50 py-5 text-white flex justify-between px-5">
          <div className="cursor-pointer" onClick={toggleClass}>
            <AlignLeft size={30} />
          </div>
          <Search size={30} />
        </div>
        <Swiper
          direction="vertical"
          loop={true}
          className="mySwiper vertical-video relative overflow-hidden z-40"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {data &&
            data.map((videoList: any, index: any) => (
              <SwiperSlide key={index}>
                {/* rightside menu */}
                <div className="absolute right-5 bottom-20 z-50">
                  <ul className="[&>li]:my-10 text-white text-xs [&>span]:mt-2">
                    <li>
                      <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                        <img src="./love.svg" alt="" />
                        <span>{videoList.likes.length}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                        <img src="./comment.svg" alt="" />
                        <span>{videoList.comments}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                        <img src="./share.svg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* uploader details */}
                <div className="absolute bottom-5 left-5 z-50 text-left">
                  <img
                    onClick={() => checkLogin(videoList.uploader._id)}
                    className="!w-12 border-[#9AE769] border-2 rounded-full relative block cursor-pointer"
                    src={videoList.uploader?.avatar}
                    alt=""
                  />

                  <span className="text-white text-xs">
                    @{videoList.uploader.username}
                  </span>
                  <p className="text-white text-xs mt-4 max-w-[80%]">
                    {videoList.caption}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <button
          onClick={handleMuteToggle}
          className="absolute z-20 top-24 left-5 text-white bg-gray-600/50 px-4 py-2 rounded-lg"
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
        </button>

        {data && (
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black">
            <MobilePlayer
              videoUrl={data[activeSlide].playbackUrls["480"][0]}
              isMuted={isMuted}
              isAutoplay={isAutoplay}
            />
          </div>
        )}

        <div className=" bg-black h-20 w-full z-50 absolute bottom-[20] flex items-center justify-between overflow-hidden">
          <ul className="flex w-4/12 justify-between mx-4 [&>li]:w-[30px]">
            <li>
              <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                <img src="./home.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                <img src="./friends.svg" alt="" />
              </Link>
            </li>
          </ul>
          <div className="w-4/12">
            <span className="bg-[#9AE769] rounded-full w-16 h-16 block mx-auto border-8 border-[#2E441F]"></span>
          </div>
          <ul className="flex w-4/12 justify-between mx-4 [&>li]:w-[30px]">
            <li>
              <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                <img src="./inbox.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                <img src="./wallet.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        {data && <Popup />}
      </div>

      <div
        className={`bg-[#f4f4f4] shadow-lg fixed left-0 top-0 z-50 h-full w-[60%] p-5 -ml-[100%] lg:hidden ${
          isToggled ? "toggled-class" : ""
        }`}
      >
        <div className="absolute right-5 cursor-pointer" onClick={toggleClass}>
          <X />
        </div>
        <div className="mt-12">
          {session && (
            <>
              {userData && (
                <Link
                  className=" bg-[#9ae769] px-20 rounded-md py-2 flex justify-center text-center"
                  href={"/user/" + userData._id}
                >
                  Profile
                </Link>
              )}
              <div
                className="cursor-pointer mr-4 bg-[#9ae769] px-20 rounded-md py-2 flex justify-center text-center w-full mt-4"
                onClick={() => {
                  signOut({ redirect: false }).then(() => {
                    router.push("/") // Redirect to the dashboard page after signing out
                  })
                }}
              >
                Logout
              </div>
            </>
          )}
          {!session && (
            <span className="mr-4 bg-[#9ae769] px-20 rounded-md py-2">
              <Login />
            </span>
          )}
          <Sidebar />
        </div>
      </div>
    </>
  )
}
