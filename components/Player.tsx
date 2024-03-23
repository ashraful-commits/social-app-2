import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import ReactPlayer from "react-player/lazy"

const VideoPlayer = (props) => {
  const source = props.src
  const videoRef = useRef(null)
  const [ref, inView] = useInView({
    rootMargin: "-20% 0% -70% 0%",
  })

  useEffect(() => {
    if (inView) {
      // Video is in view, play it
      videoRef.current?.seekTo(0) // Reset video to start when it comes into view
    } else {
      // Video is out of view, pause it
      videoRef.current?.seekTo(0) // Reset video to start when it goes out of view
    }
  }, [inView])

  return (
    <div className="overflow-hidden" ref={ref}>
      <ReactPlayer 
        className="react-player"
        ref={videoRef}
        url={source}
        controls
        playing={inView}
        
      />
    </div>
  )
}

export default VideoPlayer
