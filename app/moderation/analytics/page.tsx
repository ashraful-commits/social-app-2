"use client"

import React, { useEffect, useState,useRef } from "react"
import { useSession } from "next-auth/react"

import { useToast } from "@/components/ui/use-toast"
import IsLoading from "@/components/IsLoading"
import SideMenu from "../SideMenu"
import {Skeleton} from "@/components/ui/skeleton"
import PieChart from "@/components/PieChart"
import VerticalBarChat from "@/components/Verticalbarchart"
export default function Moderation() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setuserData] = useState()
  const { data: session } = useSession()

  const [dropId, setDropId] = useState()
  const [dropDownMenu, setDropdownMenu] = useState(false)
  const dropdownRef= useRef()
  const dropRef= useRef()

  //===============================================dropdown

const handleDropdown=(id)=>{
 
  setDropdownMenu(!dropDownMenu)
  setDropId(id)
}
//=======================================dropdown menu
const handleClickOutside = (event) => {

  if (dropdownRef.current && !dropRef.current && !dropdownRef.current.contains(event.target)) {
    setDropdownMenu(false);
  }
};
useEffect(() => {
  document.addEventListener('click', handleClickOutside);

  return () => document.removeEventListener('click', handleClickOutside)
}, []);
  const fetchData = async () => {
    fetch("https://kwiks-data.com/video/moderation?skip=0&limit=10", {
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
        setIsLoading(false)
        setuserData(data.data)
        console.log(data)
        return
      })
  }

  useEffect(() => {
    fetchData()
  }, [session])

  const checkLogin = (id) => {
    const url = "/user/" + id
    if (session?.user?.token) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      if (newWindow) newWindow.opener = null
    } else {
    }
  }

  if (isLoading) {
    return <div className="max-md:pl-0  max-md:pr-0 container flex relative justify-center lg:justify-between mt-16">
      <div className="flex flex-col gap-[5px]">
      <Skeleton className="w-[200px] h-[50px] bg-gray-100 rounded-md mt-5"/>
      <Skeleton className="w-[200px] h-[35px]  bg-gray-100 rounded-full mt-2"/>
      <Skeleton className="w-[200px] h-[35px]  bg-gray-100 rounded-full mt-2"/>
      <Skeleton className="w-[200px] h-[35px]  bg-gray-100 rounded-full mt-2"/>
      <Skeleton className="w-[200px] h-[35px]  bg-gray-100 rounded-full mt-2"/>
      <Skeleton className="w-[200px] h-[35px]  bg-gray-100 rounded-full mt-2"/>
      <Skeleton className="w-[200px] h-[35px]  bg-gray-100 rounded-full mt-2"/>
      </div>
        <div className="grid grid-cols-2 gap-10 mt-5">
        <Skeleton className="w-[500px] h-[500px] bg-gray-100 rounded-md"/>
        <Skeleton className="w-[500px] h-[500px] bg-gray-100 rounded-md"/>
        <Skeleton className="w-[500px] h-[500px] bg-gray-100 rounded-md"/>
        <Skeleton className="w-[500px] h-[500px] bg-gray-100 rounded-md"/>
        <Skeleton className="w-[500px] h-[500px] bg-gray-100 rounded-md"/>
        </div>
    </div>
  }

  
  return (
    <>
      <div className="max-md:pl-0 max-md:pr-0 container flex relative justify-center lg:justify-between mt-16">
        <SideMenu />
        <div className="lg:w-9/12 w-full max-md:w-full">
          <section className="max-md:pl-5 max-md:pr-5 mt-10 container grid grid-cols-2 gap-6 pb-8">
          <div><PieChart/></div>
          <div><VerticalBarChat/></div>
          

          </section>
        </div>
      </div>
    </>
  )
}
