import React, { useState } from 'react'

const About = () => {
  const [count, setCount] = useState(0)

  const incrementCount = ()=>{
    setCount(count+1)
  }

  const reset = ()=>{
    setCount(0)
  }

  const decrementCount = ()=>{
    setCount(count-1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrementCount}>-</button>

    </div>
  )
}

export default About
