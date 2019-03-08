import React from 'react'
import {connect} from 'react-redux'

import {
  Switch,
  Link,
  Route
} from 'react-router-dom'
import Home from './Home'
import About from './About'

function App(props){
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {props.number}
      </ul>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  )
}

export default connect(state=> {return {number: state.number}})(App)