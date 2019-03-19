
import React, {useState, useEffect} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'


export default function RouterList(props){

  const {router = []} = props
  const getRouter = (arr, parrentPath)=>{
    let result = []
    arr.forEach((item, index)=>{
      let {path, component, redirect, children} = item
      
      if(parrentPath){
        if(redirect && !(redirect.startsWith('/'))){
          redirect = `${parrentredirect}/${path}`
        }

        if(path && !(path.startsWith('/'))){
          path = `${parrentPath}/${path}`
        }
        
      }
      if(redirect){
        result.push( <Redirect exact key={index} from={path} to={redirect}/> )
      }else{
        result.push( <Route key={index} path={path} component={component} /> )
        if(children){
          result = [...result, ...getRouter(children, path)] 
        }
      }
    })
    return result
  }

  return (
    <div>
      {router.length > 0 && 
      <Switch>
        {getRouter(router)}
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