"use client";

import Toastify from "@/Utility/Toastify";
import { useUserRegisterMutation } from "@/lib/feature/UserSlice";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Register = () => {
  const [userRegister] = useUserRegisterMutation();
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleOnchange = (e: any) => {
    setInput((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleForm = async (e: any) => {
    e.preventDefault();

    try {
      if (!(input.password === input.confirm_password)) {
        setInput({
          name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      } else {
        userRegister({
          name: input.name,
          email: input.email,
          password: input.password,
        });
      }

      Toastify("Registration successful!", "success");

      // Use router.push for navigation
      router.push("/signin");
    } catch (error) {
      // Handle registration failure, show an error toast, etc.
      Toastify("Registration failed. Please try again.", "error");
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="bg-black py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-8 lg:text-3xl">
            Sign up
          </h2>
          <form
            onSubmit={handleForm}
            className="mx-auto max-w-lg rounded-lg border-[2px] border-gray-800"
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Name
                </label>
                <input
                  value={input.name}
                  onChange={handleOnchange}
                  type="text"
                  name="name"
                  className="w-full rounded  bg-gray-800 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                  placeholder="Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Email
                </label>
                <input
                  value={input.email}
                  onChange={handleOnchange}
                  type="email"
                  name="email"
                  className="w-full rounded  bg-gray-800 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Password
                </label>
                <input
                  value={input.password}
                  onChange={handleOnchange}
                  name="password"
                  type="password"
                  className="w-full rounded  bg-gray-800 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                  placeholder="Password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Confirm password
                </label>
                <input
                  value={input.confirm_password}
                  onChange={handleOnchange}
                  name="confirm_password"
                  type="password"
                  className="w-full rounded  bg-gray-800 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                  placeholder="Confirm password"
                />
              </div>
              <button
                type="submit"
                className="block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-blue-600 md:text-base"
              >
                sign up
              </button>
            </div>
            <div className="flex items-center justify-center  p-4">
              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <Link
                  href="/signin"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
