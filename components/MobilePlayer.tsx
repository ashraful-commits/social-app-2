import { useEffect, useRef, useState } from "react"

const VideoPlayer = (props) => {
  const videoUrl = props.videoUrl
  const isAutoplay = props.isAutoplay
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(props.isMuted)

  // const [isLoading, setIsLoading] = useState(true)

  // const handleLoadStart = () => {
  //   setIsLoading(true)
  // }

  // const handleLoadedData = () => {
  //   setIsLoading(false)
  // }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [videoUrl])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  useEffect(() => {
    setIsMuted(props.isMuted)
  }, [props.isMuted])

  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        preload="auto"
        width="100%"
        height="auto"
        playsInline
        controls={false}
        autoPlay={isAutoplay}
        muted={isMuted}
        loop
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

export default VideoPlayer
