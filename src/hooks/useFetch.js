import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchBlog = async () => {

        try {
            const response = await axios.get(url)
            if (response.status === 200) {
                setData(response.data.data)
            }

        } catch (error) {
            setError(error)

        } finally {
            setLoading(false)
        }

    }

    useEffect(()=>{
        fetchBlog()
    },[])

    return {
        data,
        loading,
        error
    }

}

export default useFetch