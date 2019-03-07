import React from 'react'
import {
  Switch,
  Link,
  Route
} from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function App(){
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  )
  
}