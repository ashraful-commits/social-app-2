"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Player from "@/components/Player"
import Userinfo from "@/components/Userinfo"
import VideoPlayer from "@/components/VideoPlayer"

export default function Search() {
  const { data: session } = useSession()
  const [searchData, setsearchData] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  const searchParams = useSearchParams()
  const search = searchParams.get("search")

  const handleRowClick = (username, userId) => {
    window.location.href = `/project/${username}`
  }

  const fetchData = async () => {
    fetch(`https://kwiks-data.com/search?query=${search}&skip=0&limit=15`, {
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
        setsearchData(data.data)
        console.log(data.data)
        setIsLoading(false)
        return
      })
  }

  useEffect(() => {
    fetchData()
  }, [session, search])

  if (isLoading) {
    return <div className="mt-5">Loading...</div>
  }

  return (
    <>
      <Tabs
        defaultValue="users"
        className="mt-20 flex justify-center flex-col items-center w-[900px] mx-auto"
      >
        <TabsList className="mb-10">
          <TabsTrigger className="w-[450px]" value="users">
            Users
          </TabsTrigger>
          <TabsTrigger className="w-[450px]" value="videos">
            Videos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          {searchData ? (
            <>
              {searchData &&
                searchData.users.map((singlesearchData) => (
                  <>
                    <Userinfo data={singlesearchData} />
                  </>
                ))}
            </>
          ) : (
            <div className="text-center text-xl mt-10">Loading...</div>
          )}
        </TabsContent>
        <TabsContent value="videos">
          {searchData &&
            searchData.videos.map((singlesearchData, index) => (
              <div className="mb-8 w-full inline-block" key={index}>
                <div className="flex justify-between items-center">
                  <div className="flex items-start">
                    <div>
                      <img
                        className="w-[46px] h-[46px] rounded-full"
                        src={singlesearchData.uploader?.avatar}
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <h4 className="font-bold">
                        {singlesearchData.uploader?.name}
                      </h4>
                      <h6 className="text-[12px] text-gray-300">
                        @{singlesearchData.uploader?.username}
                      </h6>
                      <div className="caption mt-4">
                        <p>{singlesearchData.caaption}</p>
                      </div>
                    </div>
                  </div>
                  <div className="followBtn max-sm:hidden">
                    <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                      <div className="getBtn font-semibold">follow</div>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="video-height video-wrap w-9/12 mx-auto flex justify-center">
                    <Player
                      src={singlesearchData.playbackUrls["480"][0]}
                      poster={singlesearchData.thumbnailUrl}
                    />
                    <div className="reaction-wrap flex items-end pl-5">
                      <ul className="[&>li]:pt-5 [&>li]:text-[11px] [&>li]:text-center">
                        <li>
                          <Link href="#">
                            <img src="./loveIcon.svg" alt="" />
                            <span>{singlesearchData.likes.length}</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img src="./commentIcon.svg" alt="" />
                            <span>{singlesearchData.comments}</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img src="./shareIcon.svg" alt="" />
                            <span>11</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </TabsContent>
      </Tabs>
    </>
  )
}
