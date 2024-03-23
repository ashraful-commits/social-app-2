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
import { useToast } from "@/components/ui/use-toast"

export default function Approve(props) {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const vid_id = props.videoId

  const handleClick = (vidId: any) => {
    setLoading(true)
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
        setLoading(false)
        console.log("approve", data)
        toast({
          variant: "green",
          title: "Video Approved!",
        })
        window.location.reload()
        return
      })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="getBtn font-semibold cursor-pointer !rounded-sm mb-4 min-w-[70px]">
        <span className="font-semibold text-[16px]">Approve</span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will approve this video.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleClick(vid_id)}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
