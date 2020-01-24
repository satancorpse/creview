import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import cooks from './modules/cooks';
import modal from './modules/modal';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users,
    cooks,
    modal
  },
  strict: debug,
})
