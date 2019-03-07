import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Sub1 from './Sub1'
import Sub2 from './Sub2'


export default function About({match}){
  return (
    <div>
      <h2>About23</h2>
      <Switch>
        <Route path={`${match.url}/sub1`} component={Sub1}/>
        <Route path={`${match.url}/sub2`} component={Sub2}/>
      </Switch>
    </div>
  )
}