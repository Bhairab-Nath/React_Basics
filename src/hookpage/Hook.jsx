import React from 'react'
import useCounter from '../hooks/useCounter'

const Hook = () => {
    const {count, increment, decrement} = useCounter(0)

    return (
        <>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
        </>
    )
}

export default Hook
