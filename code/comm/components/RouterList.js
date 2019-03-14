
import React, {useState, useEffect} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import asyncComponent from 'comm/hooks/asyncComponent'



export default function RouterList(props){
  const [list, setList] = useState([])
  const {router = []} = props

  // console.log(router)

  useEffect(()=>{
    router.forEach( async (item, index) => {
      let {path, component, redirect} = item
      if(redirect){
        // setList([...list, <Redirect key={index} to={redirect}/>])
      }else{
        setList([...list, <Route key={index} path={path} component={await asyncComponent()} />])
      }
    })
  }, [])



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