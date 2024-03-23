// useVideoPagination.js
import useSWR from "swr"

const fetcher = async (url) => {
  const res = await fetch(url)
  return res.json()
}

const useVideoPagination = (pageNumber) => {
  const baseUrl = "https://kwiks-data.com/video/?type=popular"
  const skip = (pageNumber - 1) * 2 // Assuming limit is always 2

  const url = `${baseUrl}&skip=${skip}&limit=10`

  const { data, error } = useSWR(url, fetcher)

  const newData = data?.data

  return {
    videos: newData,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useVideoPagination
