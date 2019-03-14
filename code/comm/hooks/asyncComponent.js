import React, {
  useState,
  useEffect
} from 'react'

// export default function asyncComponent(importComponentFn) {
//   const [resComponent, setResComponent] = useState(null)
//   useEffect(() => {
//     importComponentFn().then(res => {
//       setResComponent(res.default ? res.default : res)
//     })
//   }, [])
//   return resComponent
// }


export default function asyncComponent(importComponentFn){
  const [count, setCount] = useState(null)
  useEffect(() => {
    // let c = asyncComponent()
    // import('./NoPath/NoPath').then(res=>{
    //   setCount(res.default)
    // })
    // setCount(c)
    importComponentFn().then(res=>{
      setCount(res.default)
    })
    // console.log(imp)
  }, [])
  return count
}