

import React from 'react'
import FixedBox from 'comm/components/FixedBox/FixedBox'
import style from './style'

export default function Tip(props){
  return (
    <FixedBox>
      <p className={style.tipMsg}>{props.msg}</p>
    </FixedBox>
  )
}