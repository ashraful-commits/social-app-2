"use client"

import { useSearchParams } from "next/navigation"
import cookie from "js-cookie"
import { useMediaQuery } from "react-responsive"

import MobileList from "@/components/MobileList"
import Sidebar from "@/components/Sidebar"
import VideoList from "@/components/VideoList"

export default function IndexPage() {
  const searchParams = useSearchParams()
  const referral = searchParams.get("referral")

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 })

  const isMobile = useMediaQuery({ maxDeviceWidth: 767 })

  if (referral) {
    cookie.set("referral-code", referral)
  }
  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="mt-16">
          <div className="max-md:pl-0 max-md:pr-0 container flex relative justify-center lg:justify-start">
            <div className="hidden lg:block w-2/12">
              <div className="fixed">
                <Sidebar />
              </div>
            </div>
            <div className="w-8/12">
              <section className="max-md:pl-5 max-md:pr-5 container grid items-center justify-center lg:gap-6 pb-8">
                <div className="flex max-w-[520px] flex-col items-center gap-2 bg-white text-black">
                  <VideoList />
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
      {isMobile && <MobileList />}
    </div>
  )
}
