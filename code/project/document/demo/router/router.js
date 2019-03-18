
import main from '../pages/Main'
import native from '../pages/Native/index'
import detail from '../pages/Native/Detail/Detail'
import edit from '../pages/Native/Edit/Edit'

export default [{
  path: '/',
  redirect: '/main',
  exact: true
}, {
  path: '/main',
  // component: () => import('../pages/Main'),
  component: main,
  meta: {
    // isLogin: true,
    title: 'demo-main',
    // utmName: 'test-utmName'
  }
}, {
  path: '/native',
  component: native,
  children: [{
      path: 'detail/:id',
      component: detail,
    },
    {
      path: 'edit',
      component: edit,
    }
  ]
}, 
// {
//   path: '/project',
//   component: () => import('../pages/Project')
// }


]