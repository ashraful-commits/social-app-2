import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

import Login from "../Login"
import Sidebar from "../Sidebar"

export default function CanvusMenu(props) {
  const isToggled = props.isToggled
  const router = useRouter()
  const { data: session } = useSession()
  const userData = props.userData
  //   const [isToggled, setIsToggled] = useState(props.isToggled)
  //   const [isToggled, setIsToggled] = useState(false)

  const toggleClass = () => {
    //   setIsToggled(!isToggled)
  }

  console.log(isToggled)

  return (
    <div
      className={`bg-[#f4f4f4] shadow-lg fixed left-0 top-0 z-50 h-full w-[60%] p-5 -ml-[100%] lg:hidden ${
        isToggled ? "toggled-class" : ""
      }`}
    >
      <div className="absolute right-5 cursor-pointer" onClick={toggleClass}>
        <X />
      </div>
      <div className="mt-12">
        {session && (
          <>
            {userData && (
              <Link
                className=" bg-[#9ae769] px-20 rounded-md py-2 flex justify-center text-center"
                href={"/user/" + userData._id}
              >
                Profile
              </Link>
            )}
            <div
              className="cursor-pointer mr-4 bg-[#9ae769] px-20 rounded-md py-2 flex justify-center text-center w-full mt-4"
              onClick={() => {
                signOut({ redirect: false }).then(() => {
                  router.push("/") // Redirect to the dashboard page after signing out
                })
              }}
            >
              Logout
            </div>
          </>
        )}
        {!session && (
          <span className="mr-4 bg-[#9ae769] px-20 rounded-md py-2">
            <Login />
          </span>
        )}
        <Sidebar />
      </div>
    </div>
  )
}
