"use client"

// import React from "react"
// import useSWR, { mutate } from "swr"

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// export default function page() {
//   const url = "https://kwiks-data.com/video?type=popular&limit=2"
//   const { data, error, isLoading } = useSWR(url, fetcher)

//   const mainData = data?.data

//   if (error) return <div className="mt-20">failed to load</div>
//   if (isLoading) return <div className="mt-20">loading...</div>

//   return (
//     <div className="container mt-20">
//       {mainData &&
//         mainData.map((videoList: any, index: any) => <li>{videoList._id}</li>)}
//     </div>
//   )
// }

// YourComponent.js
import { useState } from "react"
import useVideoPagination from "lib/useVideoPagination"

const YourComponent = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { videos, isLoading, isError } = useVideoPagination(currentPage)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  if (isError) return <div className="mt-20">failed to load</div>
  if (isLoading) return <div className="mt-20">loading...</div>

  return (
    <div className="container mt-20">
      {/* Render your videos here */}

      {videos &&
        videos.map((video: any, index: any) => (
          <li key={index}> {video._id}</li>
        ))}

      {/* Pagination */}
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Render numeric pagination buttons */}
        <span> Page {currentPage} </span>

        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  )
}

export default YourComponent
