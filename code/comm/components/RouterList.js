
import React, {createContext, useReducer, useEffect} from 'react'
import {
  Switch,
  Link,
  Route
} from 'react-router-dom'

export default function RouterList(props){
  const {router = []} = props
  const list = router.map((item, index) => {
    return <Route path={item.path} key={index} component={item.component}/>
  })

  return (
    <div>
      {router.length > 0 && 
      <Switch>
        {list}
      </Switch>
      }
    </div>    
  )
}