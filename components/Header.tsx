"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { AlignLeft, X } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Login from "@/components/Login"

import Sidebar from "./Sidebar"
import { Button } from "./ui/button"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session } = useSession()
  const isDashboardPage = pathname === "/user"

  const [inputValue, setInputValue] = useState("")

  const [userData, setuserData] = useState()

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push(`/search?search=${inputValue}`)
    }
  }

  const [isToggled, setIsToggled] = useState(false)

  const toggleClass = () => {
    setIsToggled(!isToggled)
  }

  useEffect(() => {
    if (session) {
      fetch("https://kwiks-data.com/user", {
        method: "GET",
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.token}`,
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setuserData(data.data)
          return
        })
    }
  }, [session?.user?.token])

  return (
    <header className="bg-background fixed top-0 z-40 w-full max-md:hidden">
      <div className="container flex items-center space-x-1 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-between px-4 py-2 rounded-full bg-[#ebf2e3] my-1">
          <div className="lg:w-4/12 w-2/12 flex items-center">
            <Link href="/" className="mr-4">
              <Image width={36} height={36} src="/logo2.svg" alt={""} />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    <AlignLeft className="cursor-pointer" size={30} />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="w-[200px] p-4 [&>li]:text-sm [&>li]:py-1 [&>li]:font-semibold">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/terms-and-conditions">
                            Terms and Conditions
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="lg:w-4/12 w-8/12">
            <div className="flex items-center bg-white px-4 rounded-full">
              <img src="./searchIcon.svg" alt="" />
              <input
                className="w-full p-2 rounded-full focus-visible:outline-0"
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
            </div>
          </div>
          <div className="lg:w-4/12  w-2/12 items-center justify-end lg:flex hidden">
            {session && (
              <>
                {userData && (
                  <Link className="mr-3" href={"/user/" + userData._id}>
                    Profile
                  </Link>
                )}
                <div
                  className="cursor-pointer mr-4"
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
              <span className="mr-4">
                <Login />
              </span>
            )}

            <span className="btnBg text-white font-semibold px-5 py-2 rounded-full cursor-pointer">
              <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                Get App
              </Link>
            </span>
          </div>
          <div className="lg:hidden block cursor-pointer" onClick={toggleClass}>
            <AlignLeft />
          </div>
        </div>
      </div>
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
    </header>
  )
}
