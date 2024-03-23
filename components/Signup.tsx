"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import cookie from "js-cookie"
import { signIn } from "next-auth/react"

import LoadingBtn from "./LoadingBtn"

export default function Signup() {
  const router = useRouter()
  // email address
  const [email, setEmail] = useState("")

  // show loading button
  const [loading, setLoading] = useState(false)

  // check if verification send
  const [verify, setVerify] = useState(false)

  // check if verification send
  const [errorMsg, seterrorMsg] = useState("")

  // check verification code
  const [verificationCode, setverificationCode] = useState("")

  // check loggedin
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const refCode = cookie.get("referral-code")

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    seterrorMsg("")

    if (verify) {
      const credential = {
        email: email,
        code: verificationCode,
      }
      axios
        .post(`https://kwiks-data.com/user/verify`, credential)
        .then(async (response) => {
          try {
            const jwtToken = response.data.data

            //@ts-nocheck
            const res = await signIn("credentials", {
              email,
              jwtToken,
              redirect: false,
            })

            if (res.error) {
              seterrorMsg("Invalid Credentials")
              return
            }

            router.replace("/")
          } catch (error) {
            console.log(error)
          }
        })
    } else {
      const credential = {
        email: email,
      }
      axios
        .post(
          `https://kwiks-data.com/user/signup?referral=${refCode}`,
          credential
        )
        .then((response) => {
          console.log(response)
          setLoading(false)
          setVerify(true)
        })
        .catch((error) => {
          console.log("Error: ", error)
          setLoading(false)
        })
    }
  }

  return (
    <div className="text-center w-[400px] py-5 mx-auto">
      {/* verification form */}
      {isLoggedIn === false && verify ? (
        <>
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-semibold mb-4">Verification Code</h1>
            <p className="text-black font-light text-sm mb-4">
              Please check your email for verification code
            </p>
            <input
              className="bg-[#f1f4f7] py-3 px-6 m-2 rounded-full focus-visible:outline-none"
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setverificationCode(e.target.value)}
              required
            />
            {loading ? (
              <>
                {/* show loading button */}
                <LoadingBtn />
              </>
            ) : (
              <>
                <button
                  className="font-bold py-3 tx-6 text-white rounded-full block m-2 bg-[#4fdb01]"
                  type="submit"
                >
                  Submit
                </button>
              </>
            )}
          </form>

          {/* Error Messege */}

          {errorMsg.length > 0 ? (
            <h4 className="bg-red-500 text-white rounded-full py-1 mt-4 m-2">
              {errorMsg}
            </h4>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {/* signup form */}
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-semibold mb-4 text-black">
              Sign up to Kwiks
            </h1>
            <p className="text-black font-light text-sm mb-4">
              Enter your valid email address and password <br /> register to
              your account
            </p>
            <input
              className="bg-[#f1f4f7] py-3 px-6 m-2 rounded-full focus-visible:outline-none"
              type="email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            {loading ? (
              <>
                {/* show loading button */}
                <LoadingBtn />
              </>
            ) : (
              <>
                <button
                  className="font-bold py-3 tx-6 text-white rounded-full block m-2 bg-[#4fdb01]"
                  type="submit"
                >
                  Create Account
                </button>
              </>
            )}
          </form>

          {/* Error Messege */}

          {errorMsg.length > 0 ? (
            <h4 className="bg-red-500 text-white rounded-full py-1 mt-4 m-2">
              {errorMsg}
            </h4>
          ) : (
            ""
          )}
        </>
      )}

      <p className="text-black font-light text-sm mt-3">
        By clicking here and continuing <br />I agree to the{" "}
        <Link className="text-primary" href="/">
          Terms of Service
        </Link>
        &nbsp;and&nbsp;
        <Link className="text-primary" href="/">
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}
