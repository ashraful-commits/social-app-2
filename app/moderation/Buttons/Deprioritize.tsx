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

export default function Deprioritize(props) {
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()
  const { toast } = useToast()
  const vid_id = props.videoId
  const handleBlockClick = () => {
    setLoading(true)
    fetch("https://kwiks-data.com/video/moderation/status", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: vid_id,
        status: "deprioritized",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        console.log("approve", data)
        toast({
          variant: "green",
          title: "Video Deprioritize!",
        })
        // window.location.reload()
        return
      })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-white rounded-sm mb-4 cursor-pointer bg-red-600  px-10 py-[5px]  hover:bg-red-600 min-w-[80px]">
        <span className="font-semibold text-[16px]">Deprioritize</span>
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
          <AlertDialogAction onClick={() => handleBlockClick()}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
