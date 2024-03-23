"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { signIn } from "next-auth/react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import LoadingBtn from "./LoadingBtn"
import Signup from "./Signup"

export default function Login() {
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

  const [issignin, setissignin] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    seterrorMsg("")
    if (verify) {
      const credential = {
        email: email,
        code: verificationCode,
      }
      console.log(credential)
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
          // setLoading(false)
          // setVerify(false)
          // setIsLoggedIn(true)
        })
        .catch((error) => {
          console.log("Error: ", error.response.data.errors[0])
          seterrorMsg(error.response.data.errors[0])

          setTimeout(() => {
            seterrorMsg("")
          }, 3000)
          setLoading(false)
        })
    } else {
      const credential = {
        email: email,
      }
      axios
        .post(`https://kwiks-data.com/user/signin`, credential)
        .then((response) => {
          console.log(response)
          setLoading(false)
          setVerify(true)
        })
        .catch((error) => {
          console.log("Error: ", error.response.data.errors[0])
          seterrorMsg(error.response.data.errors[0])

          setTimeout(() => {
            seterrorMsg("")
          }, 3000)
          setLoading(false)
        })
    }
  }

  const handleSignin = () => {
    setissignin(true)
  }

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => {
          setissignin(false)
        }}
      >
        Login
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            {!issignin && (
              <div className="text-center lg:w-[400px] w-[300px] py-10 mx-auto">
                {isLoggedIn === false && verify ? (
                  <>
                    <form
                      className="flex flex-col justify-center"
                      onSubmit={handleSubmit}
                    >
                      <h1 className="text-3xl font-semibold mb-4 text-black">
                        Verification Code
                      </h1>
                      <p className=" font-light text-sm mb-4 text-black">
                        Please check your email for verification code
                      </p>
                      <input
                        className="bg-[#f1f4f7] py-3 px-6 m-2 rounded-full focus-visible:outline-none text-black"
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
                        Login to Kwiks
                      </h1>
                      <p className="font-light text-sm mb-4 text-black">
                        Enter your valid email address and password <br /> to
                        login to your account
                      </p>
                      <input
                        className="bg-[#f1f4f7] py-3 px-6 m-2 rounded-full focus-visible:outline-none text-black"
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
                            Login
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
                <h4 className="text-gray-600 font-500 mt-16 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <span
                    className="text-[#4fdb01] font-semibold hover:cursor-pointer"
                    onClick={handleSignin}
                  >
                    signup
                  </span>
                </h4>
              </div>
            )}
            {issignin && <Signup />}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
