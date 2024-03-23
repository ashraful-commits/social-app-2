import React from "react"
import Link from "next/link"

export default function ModerationBtn(props) {
  const userData = props.data
  if (!userData) {
    ;<span>Loading...</span>
  }
  return (
    <>
      {userData && userData.accountLevel == "admin" && (
        <div className="border inline-block px-10 py-2 rounded-full border-black font-semibold mr-10 hover:bg-black hover:text-white duration-300">
          <Link href={"/moderation"}>Moderation</Link>
        </div>
      )}
    </>
  )
}
