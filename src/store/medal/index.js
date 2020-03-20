/**
 * Função do estado inicial.
 *
 * @returns {{games: []}}
 */
function initialState() {
  return {
    medals: []
  };
}

const actions = {};

const getters = {
  /**
   *  Obtém uma medalha pelo ID.
   *
   * @param state
   * @returns {function(*): T}
   */
  findMedalById: state => id => {
    return state.medals.find(medal => medal.id === id);
  }
};

const mutations = {
  /**
   * Obtém as medalhas.
   *
   * @param state
   * @param medals
   */
  medals(state, medals) {
    state.medals = medals;
  },
  /**
   * Insere uma medalha na primeira posição.
   *
   * @param state
   * @param medal
   */
  insertMedal(state, medal) {
    state.medals.splice(0, 0, medal);
  },
  /**
   * Remove uma medalha pelo seu ID.
   *
   * @param state
   * @param medalId
   */
  deleteMedalsById(state, medalId) {
    let index = state.medals.findIndex(medal => medal.id === medalId);
    if (index !== -1) {
      state.medals.splice(index, 1);
    }
  },
};

export default {
  state: initialState,
  actions,
  getters,
  mutations,
};
