import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './components/App'
import Provider from './components/Provider'
import state from './redux/state'
import reducer from './redux/reducer'

render(
  <Provider state={state} reducer={reducer}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}