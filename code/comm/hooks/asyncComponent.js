import React, {
  useState,
  useEffect
} from 'react'

export default function asyncComponent(importComponentFn) {
  const [resComponent, setResComponent] = useState(null)
  useEffect(() => {
    importComponentFn().then(res => {
      setResComponent(res.default ? res.default : res)
    })
  }, [])
  return resComponent
}