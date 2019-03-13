
import React from 'react'
import FixedBox from 'comm/components/FixedBox/FixedBox'
import style from './style'

export default function Loading(){
  return (
    <div>
        <div className={style.loadingBlock}></div>
        <FixedBox>
          <div className={style.loadingContent}>
            <div className={style.spinningImg}></div>
          </div>
        </FixedBox>
    </div>
  )
}



