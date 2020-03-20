import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import gameModule from './game';
import medalModule from './medal';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'gic', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});

function initialState() {
  return {
    isOffline: false,
    user: {},
    isAuthenticated: false,
  };
}

export default new Vuex.Store({
  state: initialState,
  getters: {},
  mutations: {
    /**
     *
     * @param state
     * @param payload
     */
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    /**
     *
     * @param state
     * @param user
     */
    user(state, user) {
      state.user = user;
    },
    /**
     *
     * @param state
     */
    reset(state) {
      const s = initialState();
      Object.keys(s)
        .forEach(key => {
          state[key] = s[key];
        });
    }
  },
  modules: {
    game: gameModule,
    medal: medalModule,
  },
  plugins: [vuexLocalStorage.plugin],
});
