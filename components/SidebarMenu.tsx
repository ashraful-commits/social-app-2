import Link from "next/link"

export default function SidebarMenu() {
  return (
    <ul className="sidebar-main-menu py-5 [&>li]:pb-3">
      <li className="flex items-center [&>img]:block [&>img]:w-8 [&>img]:pr-2 text-lg">
        <Link
          className="flex items-center [&>span]:ml-2"
          target="_blank"
          href="https://apps.apple.com/us/app/kwiks/id6448708199"
        >
          <img src="/star.svg" alt="" />
          <span>Trending</span>
        </Link>
      </li>
      <li className="flex items-center [&>img]:block [&>img]:w-8 [&>img]:pr-2 text-lg">
        <Link
          className="flex items-center [&>span]:ml-2"
          target="_blank"
          href="https://apps.apple.com/us/app/kwiks/id6448708199"
        >
          <img src="/user.svg" alt="" />
          <span>Following</span>
        </Link>
      </li>
      <li className="flex items-center [&>img]:block [&>img]:w-8 [&>img]:pr-2 text-lg">
        <Link
          className="flex items-center [&>span]:ml-2"
          target="_blank"
          href="https://apps.apple.com/us/app/kwiks/id6448708199"
        >
          <img src="/explore.svg" alt="" />
          <span>Explore</span>
        </Link>
      </li>
    </ul>
  )
}
