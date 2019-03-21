import React, {
  useEffect,
  useState
} from 'react'

function importComponents(fn){
  const [c, setC] = useState(null)
  useEffect(()=>{
    fn().then(res=> {
      setC(res)
    })
  }, [])
  return c ? c.default : null
}

export default importComponents