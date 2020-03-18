/**
 * Função do estado inicial.
 *
 * @returns {{games: []}}
 */
function initialState() {
  return {
    games: []
  };
}

const actions = {};

const getters = {
  /**
   *  Obtém um jogo pelo ID.
   *
   * @param state
   * @returns {function(*): T}
   */
  findGameById: state => id => {
    return state.games.find(game => game.id === id);
  }
};

const mutations = {
  /**
   * Obtém os jogos.
   *
   * @param state
   * @param games
   */
  games(state, games) {
    state.games = games;
  }
};

export default {
  state: initialState,
  actions,
  getters,
  mutations,
};
