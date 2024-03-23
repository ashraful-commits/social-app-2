import React from "react"
import { useSession } from "next-auth/react"

export default function Userinfo(props) {
  const { data: session } = useSession()
  const data = props.data
  console.log(data)

  const checkLogin = (id) => {
    const url = "/user/" + id
    if (session?.user?.token) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      if (newWindow) newWindow.opener = null
    } else {
    }
  }

  return (
    <div className="flex items-center mb-4">
      <div className="cursor-pointer" onClick={() => checkLogin(data._id)}>
        {data ? (
          <>
            {data && data.avatar != undefined && (
              <img
                className="w-[60px] rounded-full border-white border-2"
                src={data && data.avatar}
              />
            )}
            {data && data.avatar == undefined && (
              <img
                className="w-[60px] rounded-full border-white border-2"
                src="../user.png"
              />
            )}
          </>
        ) : (
          <img
            className="w-[60px] rounded-full border-white border-2"
            src="../user.png"
          />
        )}
      </div>
      <div className="ml-2 cursor-pointer" onClick={() => checkLogin(data._id)}>
        <h4 className="font-semibold">{data.name}</h4>
        <p>
          {data.followers} followers - {data.postCount} video
        </p>
      </div>
    </div>
  )
}
