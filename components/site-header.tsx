"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

export default function SiteHeader() {
  const router = useRouter()
  const { data: session } = useSession()
  return (
    <header className="bg-background sticky top-0 z-40 w-full">
      <div className="container flex items-center space-x-1 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-between px-4 py-2 rounded-full bg-[#ebf2e3] my-1">
          <div className="w-4/12">
            <Link href="/">
              <Image width={40} height={40} src="logo2.svg" alt={""} />
            </Link>
          </div>
          <div className="w-4/12">
            <input
              className="w-full p-2 rounded-full"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="w-4/12 flex items-center justify-end">
            {session && (
              <div
                className="cursor-pointer"
                onClick={() => {
                  signOut({ redirect: false }).then(() => {
                    router.push("/") // Redirect to the dashboard page after signing out
                  })
                }}
              >
                Logout
              </div>
            )}
            {!session && <span className="mr-4">Login</span>}

            <span className="btnBg text-white font-semibold px-5 py-2 rounded-full cursor-pointer">
              Get App
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
