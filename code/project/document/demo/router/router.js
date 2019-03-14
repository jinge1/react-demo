export default [{
  path: '/',
  redirect: '/main',
  exact: true
}, {
  path: '/main',
  component: () => import('../pages/Main'),
  meta: {
    // isLogin: true,
    title: 'demo-main',
    // utmName: 'test-utmName'
  }
}, {
  path: '/native',
  component: () => import('../pages/Native/index'),
  children: [{
      path: 'detail/:id',
      component: () => import('../pages/Native/Detail/Detail'),
    },
    {
      path: 'edit',
      component: () => import('../pages/Native/Edit/Edit'),
    }
  ]
}, 
// {
//   path: '/project',
//   component: () => import('../pages/Project')
// }


]