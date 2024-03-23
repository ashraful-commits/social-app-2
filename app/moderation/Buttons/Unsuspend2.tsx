import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Unsuspend(props) {
  const { toast } = useToast()
  const { data: session } = useSession()

  const [Reason, setReason] = useState("null")
  const [UntillDate, setUntillDate] = useState()

  const videoList = props.videoList

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
        reason: "null",
        _id: vid_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("approve", data)
        toast({
          variant: "green",
          title: `User Unsuspend!`,
        })
        window.location.reload()
        return
      })
  }

  return (
    <div>
      {videoList.uploader.accountStatus == "suspended" && (
        <Button
          className="text-white rounded-sm mb-4 cursor-pointer bg-red-600  px-10 py-[5px]  hover:bg-red-600 min-w-[80px]"
          onClick={() => handlesuspendClick(videoList.uploader._id, "normal")}
        >
          <span className="font-semibold text-[16px]">Unsuspend</span>
        </Button>
      )}
    </div>
  )
}
