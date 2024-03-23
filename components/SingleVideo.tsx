import React, { useEffect, useState } from "react"
import Link from "next/link"

import { Skeleton } from "@/components/ui/skeleton"

import VideoPlayer from "./VideoPlayer"

export default function SingleVideo() {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kwiks-data.com/video?type=popular"
        )
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error: any) {
        setError(error.message)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (isLoading) {
    return (
      <>
        <div className="flex justify-between items-center w-[70%]">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </div>
        <div className="flex justify-center w-[70%] mt-5">
          <Skeleton className="h-[480px] w-[420px]" />
        </div>
        <div className="flex justify-between items-center w-[70%] mt-10">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </div>
        <div className="flex justify-center w-[70%] mt-5">
          <Skeleton className="h-[480px] w-[420px]" />
        </div>
      </>
    )
  }

  let result: any = data.data
  return (
    <div>
      {/* {result.map((item, index) => (
        <li key={index}>{item.playbackUrls["480"][0]}</li>
      ))} */}

      {result.map((videoList: any, index: any) => (
        <div className="mb-8 lg:w-[80%] w-full mx-auto lg:mx-0" key={index}>
          <div className="flex justify-between items-center">
            <div className="flex items-start">
              <div>
                <img
                  className="w-[46px] h-[46px] rounded-full"
                  src={videoList.uploader?.avatar}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <h4 className="font-bold">{videoList.uploader?.name}</h4>
                <h6 className="text-[12px] text-gray-300">
                  @{videoList.uploader?.username}
                </h6>
                {/* <div className='caaption mt-4'>
                  <p>lorem impus</p>
                </div> */}
              </div>
            </div>
            <div className="followBtn">
              <div className="getBtn font-semibold">follow</div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="video-height video-wrap lg:w-9/12 w-full mx-auto flex justify-center">
              <VideoPlayer src={videoList.playbackUrls["480"][0]} />
              <div className="reaction-wrap flex items-end pl-5">
                <ul className="[&>li]:pt-5 [&>li]:text-[11px] [&>li]:text-center">
                  <li>
                    <Link href="#">
                      <img src="./loveIcon.svg" alt="" />
                      <span>{videoList.likes.length}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src="./commentIcon.svg" alt="" />
                      <span>{videoList.comments}</span>
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
    </div>
  )
}
