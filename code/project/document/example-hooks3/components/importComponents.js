import React, {
  useEffect,
  useState
} from 'react'

function importComponents(fn){
  const [c, setC] = useState(null)
  useEffect(()=>{
    fn().then(res=> {
      setC(res)
      // setC(res && res.default ? res.default : res)
    })
  }, [])
  return c
}

export default importComponents