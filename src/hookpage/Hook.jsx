import React, { useEffect } from 'react'
import useCounter from '../hooks/useCounter'
import useFetch from '../hooks/useFetch'
const baseUrl = import.meta.env.VITE_BASE_URL

const Hook = () => {
    const { count, increment, decrement } = useCounter(0)
    const { data, loading, error } = useFetch(`${baseUrl}/api/user/blog`)
    if(loading){
        return "Loading.."
    }

    if(error){
        return "Error has occured"
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>


            <ul>
                {data?.map((blog) => {
                    return <li key={blog._id}>{blog.title}</li>
                })}
            </ul>

        </>
    )
}

export default Hook
