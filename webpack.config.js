'use strict';
const path = require('path');

module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    polyfill: 'node_modules/babel-polyfill/dist/polyfill.js',
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/(component|store)'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js'
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    locale_local: 'app/web/framework/vue/locale',
    locale_zh: 'iview/dist/locale/zh-CN',
    locale_en: 'iview/dist/locale/en-US',
    iView: 'iview/dist/iview.min.js'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: [{
    less: true
  }],
  plugins: [{
    serviceworker: true
  }],
  node: {
    console: true
  },
  optimization: {},
  done() {
    console.log('如果启动成功后, Chrome控制台浏览器脚本报错, 可以尝试执行 npm run clean 清除缓存解决');
  }
};