import Cookies from 'js-cookie';

const user = {
  state: {
    token: ''
  },
  mutations: {
    /**
     * 登出
     */
    logout(state, vm) {
      Cookies.remove('vingo-user');
      Cookies.remove('vingo-password');
      // 恢复默认样式
      const themeLink = document.querySelector('link[name="theme"]');
      themeLink.setAttribute('href', '');
      // 清空打开的页面等数据，但是保存主题数据
      let theme = '';
      if (localStorage.theme) {
        theme = localStorage.theme;
      }
      localStorage.clear();
      if (theme) {
        localStorage.theme = theme;
      }
    },
    /**
     * 设置用户登录token
     */
    setToken(state, token) {
      state.token = token;
      sessionStorage.setItem('token', token);
    },
    /**
     * 清除用户token
     */
    clearToken(state) {
      state.token = null;
      sessionStorage.setItem('token', null);
    }
  }
};

export default user;
