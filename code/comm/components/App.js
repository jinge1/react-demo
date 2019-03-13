
import React, {useContext} from 'react'
import {Context} from 'comm/components/Provider'
import Loading from 'comm/components/Loading/Loading'
import Tip from 'comm/components/Tip/Tip'
import RouterList from 'comm/components/RouterList'

import {
  Switch,
  Route
} from 'react-router-dom'

export default function App(props){
  const store = useContext(Context)
  const {$state} = store
  const {router} = props
  console.log(router)
  return (
    <div>
      <RouterList router={router}/>
      {$state.loadingNum > 0 && 
        <Loading/>
      }
      {$state.tipText !== '' && 
        <Tip msg={$state.tipText}/>
      }
    </div>
  )
}