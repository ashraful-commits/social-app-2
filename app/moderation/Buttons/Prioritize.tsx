import React from "react"
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

export default function Prioritize(props) {
  const { data: session } = useSession()
  const { toast } = useToast()
  const vid_id = props.videoList

  const handleBlockClick = (vid_id) => {
    const vidId = vid_id
    console.log(vidId)
    fetch("https://kwiks-data.com/video/moderation/status", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: vidId,
        status: "complete",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("approve", data)
        toast({
          variant: "green",
          title: "Video Prioritize!",
        })
        window.location.reload()
        return
      })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="getBtn !rounded-sm font-semibold cursor-pointer mb-4  px-10 py-[5px]  min-w-[80px]">
        <span className="font-semibold text-[16px]">Prioritize</span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will deprioritize this video.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleBlockClick(vid_id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
