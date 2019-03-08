import React from 'react'
import {
  connect
} from 'react-redux'
import {increase} from '../redux/actions'

function Sub2(props) {
  return (
  <div>
      <h3> Sub2 </h3>
      <button onClick={()=>{props.dispatch(increase(10))}}>add10</button>
  </div>
  )
}

export default connect(state=> {return {list: state.lists}})(Sub2)