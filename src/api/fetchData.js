// fetchData.js
import axiosClient from '../config/axiosClient'

const fetchData = async (url) => {
  try {
    const { data } = await axiosClient.get(url)
    return data.meals || []
  } catch (error) {
    console.error(error)
    return []
  }
}

export { fetchData }
