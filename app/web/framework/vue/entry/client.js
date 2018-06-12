import Vue from 'vue';
import '../filter';
import '../component';
import i18n from 'locale_local';

export default function(options) {
  Vue.prototype.$axios = require('axios');
  if (options.store) {
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  options.i18n = i18n;
  const app = new Vue(options);
  app.$mount('#app');
}
