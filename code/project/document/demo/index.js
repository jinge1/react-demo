import React from 'react'
// import App from './App'
import router from './router/router'
// import modules from './store'
import conf from './conf/conf'

import createApp from 'comm/mixin/createApp'

import './public/public'

createApp({
  // App,
  conf,
  router,
  // modules,
  // filters,
  // methods,
  // vueExtends
})
