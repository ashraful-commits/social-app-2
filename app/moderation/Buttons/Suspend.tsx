import React, { useState } from "react"
import { Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Suspend(props) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const { data: session } = useSession()

  const [Reason, setReason] = useState("null")
  const [UntillDate, setUntillDate] = useState()

  const videoList = props.videoList

  const handlesuspendClick = (vidId: any, status: any) => {
    setLoading(true)
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
        reason: Reason,
        suspendUntil: UntillDate,
        _id: vid_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        console.log("approve", data)
        toast({
          variant: "green",
          title: `User Suspended!`,
        })
        window.location.reload()
        return
      })
  }
  return (
    <>
      {videoList.uploader.accountStatus == "normal" && (
        <Dialog>
          <DialogTrigger className="text-white rounded-sm mb-4 cursor-pointer bg-red-600  px-4 py-2  hover:bg-red-600 min-w-[60px]">
            <span className="font-semibold text-[14px]">Suspend</span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Suspend User</DialogTitle>
              <DialogDescription>
                <span className="font-semibold">Reason:</span>
                <Textarea
                  className="mt-3 text-black"
                  placeholder="Reason of suspend"
                  defaultValue="Your account has been suspended as your video was found to be in violation of our community rules."
                  onChange={(e) => setReason(e.target.value.trim())}
                />
                <div className="flex mt-4 flex-col w-full">
                  <span className="mb-2 font-semibold">Suspend Until:</span>
                  <Input
                    type="date"
                    onChange={(e) => setUntillDate(e.target.value.trim())}
                  />
                </div>

                <Button
                  className="mt-4"
                  onClick={() =>
                    handlesuspendClick(videoList.uploader._id, "suspended")
                  }
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Suspend
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
