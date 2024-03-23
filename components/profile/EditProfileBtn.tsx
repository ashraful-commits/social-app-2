"use client"

import React, { useState } from "react"
import { Loader2 } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "../ui/button"

export default function EditProfileBtn(props) {
  const { toast } = useToast()
  const userData = props.data
  const session = props.session

  const [name, setName] = useState()
  const [username, setUserName] = useState()
  const [bio, setBio] = useState()
  const [Loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://kwiks-data.com/user", {
        method: "POST",
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          bio,
        }),
      })

      if (res.ok) {
        const responseData = await res.json()
        console.log("profile updated!")
        setLoading(false)

        setTimeout(() => {
          window.location.reload()
        }, 3000)

        if (responseData.errors.length) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: responseData.errors,
          })
        }
        console.log(responseData.errors)
      } else {
        console.log("profile update failed!")
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem profile update failed!.",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div>
      {userData && session && session?.user?.email == userData.email && (
        <Dialog>
          <DialogTrigger asChild>
            <div className="border inline-block px-10 py-2 rounded-full border-black font-semibold mr-10 cursor-pointer hover:bg-black hover:text-white duration-300">
              Edit Profile
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    required
                    defaultValue={userData && userData.name}
                    className="col-span-3"
                    onChange={(e) => setName(e.target.value.trim())}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    required
                    defaultValue={userData && userData.username}
                    className="col-span-3"
                    onChange={(e) => setUserName(e.target.value.trim())}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bio" className="text-right">
                    Bio
                  </Label>
                  <textarea
                    required
                    className="col-span-3 border rounded-md p-2"
                    rows="5"
                    defaultValue={userData && userData.bio}
                    onChange={(e) => setBio(e.target.value.trim())}
                  ></textarea>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  {Loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
