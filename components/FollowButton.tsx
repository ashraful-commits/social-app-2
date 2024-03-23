"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { useToast } from "@/components/ui/use-toast"

export default function FollowButton(props) {
  const { data: session } = useSession()
  const userToken = session?.user?.token
  const uploaderId = props.uploaderId
 
const uploaderName = props.uploaderName;
  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const [followBtnText, setfollowBtnText] = useState("follow")

  function isIdAvailable(id, array) {
    return array.indexOf(id) !== -1
  }

  const followText = async (uploaderId) => {
    try {
      const response = await fetch("https://kwiks-data.com/user", {
        cache: "force-cache",
      })
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await response.json()
      console.log(data)
      const following = data.data.following
      if (isIdAvailable(uploaderId, following)) {
        setfollowBtnText("unfollow")
      } else {
        setfollowBtnText("follow")
      }
      setIsLoading(false)
    } catch (error: any) {
      console.log(error)
    }
  }

  const handleFollow = async (userId) => {
    setIsLoading(true)
    console.log(userId)
    try {
      const dataToSend = {
        _id: userId,
      }
      const response = await fetch("https://kwiks-data.com/user/follow", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }

      const data = await response.json()

      if (response.ok) {
        setfollowBtnText((prevText) =>
          prevText === "follow" ? "unfollow" : "follow"
        )
        setIsLoading(false)
        toast({
          title:`Your now ${followBtnText} ${uploaderName}`
        })
      }
      // window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    followText(uploaderId)
  }, [session, uploaderId])

  return (
    <>
      {userToken ? (
        <div
          className="getBtn font-semibold cursor-pointer"
          onClick={async (e) => handleFollow(uploaderId)}
        >
          {isLoading && "Loading"}
          {!isLoading && followBtnText && uploaderId ? (
            <> {followBtnText}</>
          ) : (
            "..."
          )}
        </div>
      ) : (
        <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
          <div className="getBtn font-semibold">follow</div>
        </Link>
      )}
    </>
  )
}
