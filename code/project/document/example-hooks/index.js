import React from 'react'
import {
  render
} from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'

import App from './components/App'
import Provider from './components/Provider'
// let {
//   Provider
// } = React.createContext()

const value = {
  name: 'test1',
  info: {
    userId: '######123456###',
    token: 'nothing'
  },
  say() {

  }
}

render( 
  
      <BrowserRouter>
      <Provider value = {value}>
        <App/>
      </Provider> 
      </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}