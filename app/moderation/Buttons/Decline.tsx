import React, { useState } from "react"
import { Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Decline(props) {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const videoList = props.videoList
  const [declineReason, setdeclineReason] = useState()

  const handleDecline = (videoId, reason) => {
    setLoading(true)
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
        setLoading(false)
        console.log("approve", data)
        toast({
          variant: "green",
          title: `Video Declined!`,
        })
        window.location.reload()
        return
      })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button className="text-white rounded-sm mb-4 font-semibold cursor-pointer bg-red-600  px-10 py-[5px] min-w-[80px]">
          Decline
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Decline Video</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="mb-4">
              Send a message to user about the reson of decline this video
            </p>
            <Textarea
              placeholder="Type your message here."
              onChange={(e) => setdeclineReason(e.target.value.trim())}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDecline(videoList._id, declineReason)}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
