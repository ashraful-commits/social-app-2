// Create a file, e.g., usePopularVideos.js

import useSWR from "swr"

const fetcher = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}

export const usePopularVideos = (limit) => {
  const { data, error } = useSWR(
    `https://kwiks-data.com/video?type=popular&limit=${limit}`,
    fetcher
  )

  const Maindata = data?.data

  return {
    Maindata,
    isLoading: !data && !error,
    isError: error,
  }
}
