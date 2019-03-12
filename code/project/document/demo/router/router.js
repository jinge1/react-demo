export default [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: Index,
    meta: {
      // isLogin: true,
      title: 'demo-index',
      utmName: 'test-utmName'
    }
  }, {
    path: '/fetch',
    component: () => import('../pages/Fetch'),
    meta: {
      title: 'demo-fetch',
      utmName: 'test-utmName-fetch'
    }
  }
]