import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"

export default function Popup() {
  const [isPopupVisible, setIsPopupVisible] = useState(true)

  const handleNotNowClick = () => {
    const popupElement = document.getElementById("popup")
    if (popupElement) {
      popupElement.classList.remove("slide-in")
      popupElement.classList.add("slide-out")
    }
    setTimeout(() => {
      setIsPopupVisible(false)
    }, 500) // Adjust the delay as needed
  }

  useEffect(() => {
    // Add a class after the component has mounted
    const popupElement = document.getElementById("popup")
    if (popupElement) {
      popupElement.classList.add("slide-in")
    }
  }, [])

  return (
    // Check if the popup should be visible
    isPopupVisible && (
      <div id="popup" className="w-full h-[100dvh] absolute top-0 left-0 z-50">
        <div className="bg-white absolute bottom-0 z-50 w-full pb-4 pt-6 text-center rounded-t-xl">
          <Image
            className="mx-auto mb-2"
            width={56}
            height={56}
            src="/logo2.svg"
            alt={""}
          />
          <h1 className="text-[25px] mb-1 font-semibold">
            Get the full app experience
          </h1>
          <p className="text-[12px]">
            Enjoy more videos and great features on the app
          </p>
          <div className="flex justify-center flex-col mx-20">
            <Button className="mt-5 bg-[#71BB42]">
              <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                Open Kwiks
              </Link>
            </Button>
            <Button
              variant="outline"
              className="!bg-white border-none mt-2 !pt-2 h-8"
              onClick={handleNotNowClick}
            >
              Not Now
            </Button>
          </div>
        </div>
      </div>
    )
  )
}
