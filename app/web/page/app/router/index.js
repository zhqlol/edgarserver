import Vue from 'vue';
import iView from 'iview';
import Util from 'framework/utils/utils';
import Cookies from 'js-cookie';
import VueRouter from 'vue-router';
import { routers } from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
  base: '/app',
  routes: routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  // 显示进度条
  iView.LoadingBar.start();
  // 设置标题
  Util.title(to.meta.title);
  if (Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
    next({
      replace: true,
      name: 'locking'
    });
  } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
    next(false);
  } else {
    // 防止跟其他应用key重复，user增加前缀
    const currentUserKey = 'edgar-user';
    if (!Cookies.get(currentUserKey) && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
      if (to.name === 'register') {
        next();
      } else {
        next({
          name: 'login'
        });
      }
    } else if (Cookies.get(currentUserKey) && to.name === 'login' && sessionStorage.getItem('token')) { // 判断是否已经登录且前往的是登录页
      Util.title();
      next({
        name: 'home_index'
      });
    } else {
      next();
    }
  }
});

router.afterEach((to) => {
  // Util.openNewPage(router.app, to.name, to.params, to.query);
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;