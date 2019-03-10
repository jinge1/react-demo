import React, {useContext} from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Sub1 from './Sub1'
import Sub2 from './Sub2'


import {context} from './Provider'

export default function About({match}){
  const { state, dispatch } = useContext(context);
  console.log(state)
  return (
    <div>
      <h2 onClick={()=>dispatch({type: 'decrement'})}>About23--{state.count}</h2>
      <Switch>
        <Route path={`${match.url}/sub1`} component={Sub1}/>
        <Route path={`${match.url}/sub2`} component={Sub2}/>
      </Switch>
    </div>
  )
}