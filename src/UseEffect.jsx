import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  // type 1 of useEffect
  // useEffect(()=>{
  //   console.log("Hello inside useeffect!")
  // },[])

  //type 2 of useEffect
  const [count, setCount] = useState(0)
  useEffect(()=>{
      console.log("Hello inside useeffect!")
  },[count])

  //type 3 of useEffect
  // useEffect(()=>{
  //   console.log("Hello inside useeffect!")
  // })

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count + 1)}} >+</button>
    </div>
  )
}

export default UseEffect
