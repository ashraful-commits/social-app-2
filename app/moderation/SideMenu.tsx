import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowBigLeft } from "lucide-react"

const menuItems = [
  {
    name: "Suspensions",
    url: "/moderation/suspensions",
  },
  {
    name: "Deprioritize",
    url: "/moderation/deprioritize",
  },
  {
    name: "Analytics",
    url: "/moderation/analytics",
  },
  {
    name: "Messages",
   url: "/moderation/messages",
  },
  {
    name: "Bans",
   url: "/moderation/bans",
  },
  {
    name: "Deletes",
   url: "/moderation/deletes",
  },
]

export default function SideMenu(props:any) {
  

  const pathname = usePathname()
  return (
    <div className="hidden w-2/12 lg:block">
      <div className="fixed">
        <h1 className="pb-2 mt-5 text-xl font-semibold">Moderation Panel</h1>
        <hr className="mb-6" />
        {pathname != "/moderation" && (
          <div
            className={`border bg-[#8fdd5d] text-md text-center mt-2 py-1 rounded-full font-semibold cursor-pointer text-white hover:bg-black transition-all`}
          >
            <Link
              href="/moderation"
              className="flex items-center justify-center"
            >
              <ArrowBigLeft />
              <span className="ml-2">Go Back</span>
            </Link>
          </div>
        )}

        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={`border bg-[#8fdd5d] text-md relative text-center mt-2 py-1 rounded-full font-semibold cursor-pointer text-white hover:bg-black transition-all ${
              pathname == menuItem.url ? "menu-active" : ""
            }`}
          >
            <Link href={menuItem.url}>{menuItem.name}</Link>
            {menuItem.name === "Suspensions" && <span className="absolute top-[5px] text-[12px] right-3 text-red-500">{props?.userData?.filter((item) => item.status === "suspended").length}</span>} 
           { menuItem.name==="Deprioritize" &&<span className="absolute top-[5px] text-[12px] right-3 text-red-500">{props?.userData?.filter((item) => item.status === "deprioritized").length}</span>} 
           { menuItem.name==="Messages" &&<span className="absolute top-[5px] text-[12px] right-3 text-red-500">0</span>} 
           
          </div>
        ))}
      </div>
    </div>
  )
}
