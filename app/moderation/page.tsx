"use client"

import React, { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"

import IsLoading from "@/components/IsLoading"

import Approve from "./Buttons/Approve"
import Decline from "./Buttons/Decline"
import Deprioritize from "./Buttons/Deprioritize"
import Suspend from "./Buttons/Suspend"
import Unsuspend from "./Buttons/Unsuspend"
import SideMenu from "./SideMenu"

export default function Moderation() {
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setuserData] = useState()
  const { data: session } = useSession()
  const [dropId, setDropId] = useState()
  const [dropDownMenu, setDropdownMenu] = useState(false)
  const dropdownRef = useRef()
  const dropRef = useRef()
  const handleDropdown = (id) => {
    setDropdownMenu(!dropDownMenu)
    setDropId(id)
  }
  //=======================================dropdown menu
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownMenu(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  //======================data fatch
  const fetchData = async () => {
    fetch("https://kwiks-data.com/video/moderation?skip=0&limit=99", {
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
//================================== chack login
  const checkLogin = (id) => {
    const url = "/user/" + id
    if (session?.user?.token) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      if (newWindow) newWindow.opener = null
    } else {
    }
  }
//=================================loading
  if (isLoading) {
    return <IsLoading />
  }

  return (
    <>
      <div
        ref={dropdownRef}
        className="container relative flex justify-center mt-16 max-md:pl-0 max-md:pr-0 lg:justify-between"
      >
        <SideMenu userData={userData} />
        <div className="w-full lg:w-9/12 max-md:w-full">
          <section className="container flex items-center pb-8 mt-10 max-md:pl-5 max-md:pr-5 lg:gap-6">
            <div className=" max-w-[980px] w-full  grid grid-cols-3 items-start gap-5 bg-white text-black">
              {userData &&
                // @ts-ignore
                userData.map((videoList, index) => (
                  <div
                    key={index}
                    className=" border rounded-lg h-[450px] overflow-hidden relative max-lg:flex max-lg:justify-center w-full "
                  >
                    {videoList.status != "deprioritized" && (
                      <div className="flex justify-between border-b ">
                        <div className="w-full ">
                          <div className="flex px-3 mt-2 gap-x-3">
                            <div
                              onClick={() => checkLogin(videoList.uploader._id)}
                              className="cursor-pointer w-[46px] h-[46px] overflow-hidden rounded-full shrink-0"
                            >
                              <img
                                className="w-full h-full shrink-0"
                                src={videoList.uploader?.avatar}
                                alt=""
                              />
                            </div>
                            <div>
                              <h4
                                className="font-bold cursor-pointer"
                                onClick={() =>
                                  checkLogin(videoList.uploader._id)
                                }
                              >
                                {videoList.uploader?.name}
                              </h4>
                              <h6
                                className="text-[12px] text-gray-300 cursor-pointer"
                                onClick={() =>
                                  checkLogin(videoList.uploader._id)
                                }
                              >
                                @{videoList.uploader?.username}
                              </h6>
                            </div>
                            <button
                              onClick={() =>
                                handleDropdown(videoList?.uploader?._id)
                              }
                              className="ml-auto"
                            >
                              {" "}
                              <svg
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
                                      <path
                                        d="M171.603,0h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705
                                        c8.612,0,15.618-7.006,15.618-15.618V15.618C187.221,7.006,180.215,0,171.603,0z"
                                      />
                                      <path
                                        d="M171.603,106.279h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705
                                        c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,113.285,180.215,106.279,171.603,106.279z"
                                      />
                                      <path
                                        d="M171.603,212.559h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705
                                        c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,219.564,180.215,212.559,171.603,212.559z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </button>
                          </div>

                          <div className="flex items-start justify-center ">
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
                              {dropDownMenu &&
                                dropId === videoList?.uploader?._id && (
                                  <div ref={dropRef} className="absolute flex flex-col items-center justify-center p-3 ml-5 bg-white border rounded-md shadow-2xl top-16 right-1 max-md:mt-5">
                                    <span
                                      style={{
                                        clipPath:
                                          "polygon(51% 12%, 0% 100%, 100% 100%)",
                                      }}
                                      className="absolute block w-5 h-5 bg-gray-100 border shadow-2xl -top-5 right-2"
                                    ></span>
                                    {/* Approve Button */}
                                    <Approve ref={dropRef} videoId={videoList._id} />

                                    <Decline ref={dropRef} videoList={videoList} />

                                    {/* Suspend button */}
                                    <Suspend ref={dropRef} videoList={videoList} />

                                    {/* Deprioritize button */}
                                    <Deprioritize ref={dropRef}  videoId={videoList._id} />

                                    {/* Unsuspand button */}
                                    <Unsuspend ref={dropRef} videoList={videoList} />
                                  </div>
                                )}
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
