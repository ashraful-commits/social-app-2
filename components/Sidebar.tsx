import Image from "next/image"
import Link from "next/link"

import PopularCreator from "./PopularCreator"
import SidebarMenu from "./SidebarMenu"

export default function Sidebar() {
  return (
    <div className="overflow-y-auto h-[100vh]">
      {/* <SidebarMenu /> */}
      {/* <PopularCreator /> */}
      <div className="downLinks mb-5">
        <h4 className="font-semibold py-2">Download Kwiks App</h4>
        <div className="flex">
          <Link
            target="_blank"
            href="https://apps.apple.com/us/app/kwiks/id6448708199"
          >
            <Image
              src="/appStore.svg"
              className="pr-1"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Link>
        </div>
      </div>
      <div className="sidebar-menu font-semibold py-2 pb-20">
        {/* <h4>About Kwiks</h4>
        <ul className="text-[11px] flex flex-wrap font-light gap-3 mt-2 w-[220px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul> */}
        <h4>Follow us</h4>
        <div className="flex items-center py-4">
          <ul className="flex [&>li]:pr-1">
            <li>
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61552505627916"
              >
                <img src="/fb.svg" alt="facebook" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/kwikssocial/"
              >
                <img src="/ln.svg" alt="Linkdin" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com/kwikssocial/"
              >
                <img src="/insta.svg" alt="Instagram" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://twitter.com/Kwikssocial">
                <img src="/tw.svg" alt="Twitter" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
