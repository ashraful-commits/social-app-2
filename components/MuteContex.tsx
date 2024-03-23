"use client"

// context/MuteContext.js
import React, { createContext, useContext, useState } from "react"

const MuteContext = createContext()

export const MuteProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  const setMute = (value) => {
    setIsMuted(value)
  }

  return (
    <MuteContext.Provider value={{ isMuted, toggleMute, setMute }}>
      {children}
    </MuteContext.Provider>
  )
}

export const useMute = () => {
  const context = useContext(MuteContext)
  if (!context) {
    throw new Error("useMute must be used within a MuteProvider")
  }
  return context
}
