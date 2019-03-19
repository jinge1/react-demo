
import Main from '../pages/Main'
import native from '../pages/Native/index'
import Detail from '../pages/Native/Detail/Detail'
import Edit from '../pages/Native/Edit/Edit'

export default [{
  path: '/',
  redirect: '/main',
  exact: true
}, {
  path: '/main',
  // component: () => import('../pages/Main'),
  component: Main,
  meta: {
    // isLogin: true,
    title: 'demo-main',
    // utmName: 'test-utmName'
  }
}, {
  path: '/native',
  // component: () => import('../pages/Native/index'),
  component: native,
  children: [{
      path: 'detail/:id',
      // component: () => import('../pages/Native/Detail/Detail'),
      component: Detail,
    },
    {
      path: 'edit',
      // component: () => import('../pages/Native/Edit/Edit'),
      component: Edit
    }
  ]
}, 
// {
//   path: '/project',
//   component: () => import('../pages/Project')
// }
]