import React, {useContext} from 'react'

// import {RouterContext} from 'comm/components/RouterList'
import {Context} from 'comm/components/Provider'

// console.log(RouterContext)

export default function Main(){
  const store = useContext(Context)
  // console.log('props: ')
  // console.log(props)
  console.log('store: ')
  console.log(store)
  return <h1>Main</h1>
}