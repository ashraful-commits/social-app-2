import React from "react"
import Image from "next/image"

export default function MobileLoader() {
  return (
    <div className="w-full relative h-screen bg-black">
      <div className="loading-wrapper flex justify-center">
        <p className="flex items-center justify-center text-center">
          <div className="pulse-effect">
            <Image width={66} height={66} src="/logo2.svg" alt={""} />
          </div>
        </p>
      </div>
    </div>
  )
}
