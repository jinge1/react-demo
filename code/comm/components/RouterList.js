
import React, {useState, useEffect} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import asyncComponent from 'comm/hooks/asyncComponent'
import test from './Test'



export default function RouterList(props){
  const [list, setList] = useState([])
  const {router = []} = props

  // console.log(router)

  useEffect(()=>{
    router.forEach( (item, index) => {
      let {path, component, redirect} = item
      if(redirect){
        // setList([...list, <Redirect exact key={index} from={path} to={redirect}/>])
      }else{
        // let com = asyncComponent(()=> import('./Test'))

        // setList([...list, Test])
      }
    })
  }, [])

  // let list = router.map((item, index)=>{
  //   let {path, component, redirect} = item
  //     if(redirect){
  //       return <Redirect exact key={index} from={path} to={redirect}/>
  //     }else{
  //       let result = asyncComponent(component)
  //       console.log('result: ')
  //       console.log(result)
  //       return null
  //       // return <Route key={index} path={path} component={asyncComponent(component)} />
  //       // setList([...list, <Route key={index} path={path} component={await asyncComponent()} />])
  //     }
  // })


  const c = test(()=>import('./NoPath/NoPath'))
  return (
      <div>{c}</div>
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