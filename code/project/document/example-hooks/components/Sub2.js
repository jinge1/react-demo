import React from 'react'
import {
  connect
} from 'react-redux'
import * as actionCreators from '../redux/actions'

function Sub2(props) {
  console.log(props)
  return (
  <div>
      <h3> Sub2 </h3>
      <button onClick={()=>{props.increase(10)}}>add10</button>
      <button onClick={()=>{props.fetchPostsIfNeeded(10)}}>add20</button>
  </div>
  )
}

export default connect(state => {
  return {
    list: state.lists
  }
}, actionCreators)(Sub2)