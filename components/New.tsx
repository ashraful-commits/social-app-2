"use client"

import React, { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"

const VideoPlayer = ({ url }) => {
  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0]
      setIsPlaying(entry.isIntersecting)
    }

    const options = {
      root: null,
      rootMargin: "56px",
      threshold: 0.5, // Adjust as needed
    }

    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(handleIntersection, options)

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current)
        }
      }
    }
  }, [containerRef])

  return (
    <div ref={containerRef}>
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls
        playing={isPlaying}
        muted={!isPlaying}
        loop
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default VideoPlayer
