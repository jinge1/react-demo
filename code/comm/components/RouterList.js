
import React, {useState, useEffect} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
// import asyncComponent from 'comm/hooks/asyncComponent'
// import test from './Test'
// import Edit from '../../project/document/demo/pages/Native/Edit/Edit' 





export default function RouterList(props){
  // const [list, setList] = useState([])
  const {router = []} = props

  // const Edit = asyncComponent(() => import('../../project/document/demo/pages/Native/Edit/Edit'))
  // console.log('Edit: --->')
  // console.log(Edit)
  // console.log('Edit: <---')
  // console.log(router)

  // useEffect(()=>{
  //   router.forEach( (item, index) => {
  //     let {path, component, redirect} = item
  //     if(redirect){
  //       setList([...list, <Redirect exact key={index} from={path} to={redirect}/>])
  //     }else{
  //       // setList([...list, asyncComponent(component)])
  //     }
  //   })
  //   // router.forEach((item, index) => {
  //   //   console.log(list)
  //   //   setList([...list, index * 10])
  //   // })

  // }, [])

  let list = router.map((item, index)=>{
    let {path, component, redirect} = item
      if(redirect){
        return <Redirect exact key={index} from={path} to={redirect}/>
      }else{
        return <Route key={index} path={path} component={component} />
      }
  })



  // const nlist = router.map((item, index)=>{
  //   return index * 10
  // })

  // console.log(nlist)



  // const c = test(()=>import('./NoPath/NoPath'))
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


  // return (
  //   <div>
  //     {router.length > 0 && 
  //     <Switch>
  //       {list}
  //     </Switch>
  //     }
  //   </div>    
  // )