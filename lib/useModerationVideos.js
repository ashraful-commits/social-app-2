// Create a file, e.g., useModerationVideos.js

import useSWRInfinite from "swr/infinite"

const fetcher = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}

export const useModerationVideos = (limit = 1) => {
  const getKey = (pageIndex, previousPageData) => {
    // If there are no more items, return null
    if (previousPageData && previousPageData.length === 0) return null

    // Calculate the skip value for the next page
    const skip = pageIndex * limit

    // Construct the API URL with skip and limit parameters
    return `https://kwiks-data.com/video?type=popular&limit=${limit}`
  }

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)

  const newData = data?.data

  console.log(newData)

  const moderationVideos = newData
    ? newData.flatMap((page) => page.newData)
    : []

  return {
    moderationVideos,
    isLoading: !data && !error,
    isError: error,
    size,
    setSize,
  }
}
