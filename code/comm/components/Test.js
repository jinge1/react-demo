

import React, {
  useState,
  useEffect
} from 'react'

// import asyncComponent from '../hooks/asyncComponent'

export default function test(imp){
  const [count, setCount] = useState(null)
  useEffect(() => {
    imp().then(res=>{
      setCount(res.default)
    })
  }, [])
  return count
}