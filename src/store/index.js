import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import gameModule from './game';

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
    medals: []
  };
}

export default new Vuex.Store({
  state: initialState,
  getters: {
    findMedalsById: state => id => {
      return state.medals.find(medal => medal.id === id);
    },
  },
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    // User
    user(state, user) {
      state.user = user;
    },
    // Medals
    medals(state, medals) {
      state.medals = medals;
    },
    insertMedal(state, medal) {
      state.medals.splice(0, 0, medal);
    },
    deleteMedalsById(state, medalId) {
      let index = state.medals.findIndex(medal => medal.id === medalId);
      if (index !== -1) {
        state.medals.splice(index, 1);
      }
    },
    // Reset
    reset(state) {
      // acquire initial state
      const s = initialState();
      Object.keys(s)
        .forEach(key => {
          state[key] = s[key];
        });
    }
  },
  modules: {
    game: gameModule,
  },
  plugins: [vuexLocalStorage.plugin],
});
