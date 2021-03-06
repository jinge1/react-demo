import React from 'react'
import {render} from 'react-dom'
import {HashRouter} from 'react-router-dom'
import Provider from 'comm/components/Provider'
import App from 'comm/components/App'

import state from 'comm/store/state'
import reducer from 'comm/store/reducer'

// 初始化页面
import 'comm/utils/initPage'
import 'comm/public/reset'


export default ({
    conf = {},
    router,
    // modules = {},
    // filters = {},
    // methods = {},
    // vueExtends = {},
    el = '#root'
  })=>{

  const ele = typeof el === 'object' ? el : document.querySelector(el)

  render(
    <Provider state={state} reducer={reducer}>
      <HashRouter>
        <App router={router}/>
      </HashRouter>
    </Provider>,
    ele
  )

  if (module.hot) {
    module.hot.accept()
  }
}

