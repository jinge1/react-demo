
import React from 'react'
import style from './style'

export default function FixedBox(props){
  let {position = 'center'} = props
  return (
    <div className={`${style.fixedBox} ${style[position]}`}>
      {props.children}
    </div>
  )
}