import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOffline: false,
    isAuthenticated: false,
  },
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  modules: {}
});
