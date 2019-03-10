import React from 'react'
import {
  render
} from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'

import App from './components/App'
import Provider from './components/Provider'

render(
  <Provider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}