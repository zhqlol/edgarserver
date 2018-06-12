<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>
<script type='text/babel'>
import 'babel-polyfill';
import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';

sync(store, router);

export default {
  data() {
    return {
    };
  },
  router,
  store,
  mounted() {
    // 配置消息提示
    this.$Message.config({
      duration: 5
    });
  }
};
</script>
