import React, {useState} from 'react'

export default function Home(){
  const [count, setCount] = useState(0)

  return <h2 onClick={()=> setCount(count + 2)}>Home--{count}</h2>
}