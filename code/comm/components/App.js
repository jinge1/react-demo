
import React, {useState, useEffect, useContext} from 'react'
import {Context} from 'comm/components/Provider'
import Loading from 'comm/components/Loading/Loading'
import Tip from 'comm/components/Tip/Tip'
import RouterList from 'comm/components/RouterList'

import {
  Switch,
  Route
} from 'react-router-dom'

// import Test from 'comm/components/Test'

export default function App(props){
  const [comp, setComp] = useState(null)
  const store = useContext(Context)
  const {$state} = store
  const {router} = props

  useEffect(()=>{
    import ('comm/components/Test').then(res=>{
        setComp(
          <Route path='/test' component={res.default}/>
        )
      })
  }, [])

  return (
    <div>
      <RouterList router={router}/>
      {$state.loadingNum > 0 && 
        <Loading/>
      }
      {$state.tipText !== '' && 
        <Tip msg={$state.tipText}/>
      }
      {comp}
    </div>
  )
}