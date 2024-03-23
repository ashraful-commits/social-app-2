import Link from "next/link"

export default function PopularCreator() {
  const creatorList = [
    {
      name: "Makenna Rosser",
      userName: "rosser_makenna",
      userImg: "/p1.png",
    },
    {
      name: "Desirae Bator",
      userName: "batorbaby",
      userImg: "/p2.png",
    },
    {
      name: "James Workman",
      userName: "workman",
      userImg: "/p3.png",
    },
    {
      name: "Talan Stanton",
      userName: "stanton",
      userImg: "/p4.png",
    },
  ]
  return (
    <div className="popular-creator pb-3">
      <h4 className="font-semibold py-1 pb-3">Popular Creators</h4>
      <ul>
        {creatorList.map((creatorList, index) => (
          <li className="pb-2" key={index}>
            <div className="flex items-center">
              <div>
                <Link href="#">
                  <img src={creatorList.userImg} alt="" />
                </Link>
              </div>
              <div className="pl-2">
                <Link href="#">
                  <h4 className="mb-0">{creatorList.name}</h4>
                </Link>
                <Link href="#">
                  <h6 className="text-[12px] text-gray-400">
                    @{creatorList.userName}
                  </h6>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link className="flex items-center text-sm mt-4" href="#">
        <span className="pr-2">See More</span>
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-3.08602e-07 0.94L3.09042 4L-4.10887e-08 7.06L0.951417 8L5 4L0.951417 -4.15878e-08L-3.08602e-07 0.94Z"
            fill="#3C3C3C"
          />
        </svg>
      </Link>
    </div>
  )
}
