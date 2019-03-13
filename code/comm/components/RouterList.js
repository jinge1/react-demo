
import React, {createContext, useReducer, useEffect} from 'react'
import {Switch,Link,Route} from 'react-router-dom'



export default function RouterList(props){
  const {router = []} = props

  const list = router.map((item, index) => {
    const {path, component} = item
    return <Route path={item.path} key={index} component={item.component}/>
  })
  console.log(list)
  return (
    <Switch>{list}</Switch>
  )
}


  // return (
  //   <div>
  //     {router.length > 0 && 
  //     <Switch>
  //       {list}
  //     </Switch>
  //     }
  //   </div>    
  // )