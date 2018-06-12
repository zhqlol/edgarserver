'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import state from './app/state';
import actions from './app/actions';
import getters from './app/getters';
import mutations from './app/mutations';

import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const modules = {
  app,
  user
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules
});