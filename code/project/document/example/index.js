import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'
import App from './components/App'
import {
  BrowserRouter
} from 'react-router-dom'

console.log('Provider: ', Provider)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {

  module.hot.accept()

}