import Main from '../component/homepage/main.vue';

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录 - Edgar Node Server'
  },
  component: () =>
    import('../component/login/login.vue')
};
export const registerRouter = {
  path: '/register',
  name: 'register',
  meta: {
    title: '注册 - Edgar Node Server'
  },
  component: () =>
    import('../component/register/register.vue')
};
export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () =>
    import('../component/error-page/404.vue')
};
export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () =>
    import('../component/error-page/403.vue')
};
export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () =>
    import('../component/error-page/500.vue')
};
export const locking = {
  path: '/locking',
  name: 'locking',
  component: () =>
    import('../../../component/lockscreen/components/locking-page.vue')
};
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [{
    path: 'home',
    title: {
      i18n: 'home'
    },
    name: 'home_index',
    component: () =>
      import('../component/dashboard/dashboard.vue')
  },
  {
    path: 'ownspace',
    title: '个人中心',
    name: 'ownspace_index',
    component: () =>
      import('../component/list/list.vue')
  },
  {
    path: 'message',
    title: '消息中心',
    name: 'message_index',
    component: () =>
      import('../component/list/list.vue')
  }
  ]
};
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/vgt',
    icon: 'earth',
    name: 'vgt',
    title: 'VGT',
    component: Main,
    children: [{
      path: 'RegistedUsersNewList',
      title: '用户管理',
      name: 'RegistedUsersNewList',
      icon: 'person-stalker',
      component: () =>
        import('../component/list/list.vue')
    },
    {
      path: 'VehiclesNewList',
      title: '车辆管理',
      name: 'VehiclesNewList',
      icon: 'model-s',
      component: () =>
        import('../component/list/list.vue')
    }
    ]
  }
];
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  registerRouter,
  locking,
  otherRouter,
  ...appRouter,
  page500,
  page403,
  page404
];