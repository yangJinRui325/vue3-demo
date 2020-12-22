const state = {
  hit: 0
};
const getters = {
  getHit: state => state.hit
};
const mutations = {
  setHit(state, value) {
    state.hit = value;
  }
};
const actions = {
  setHit({ commit }, value) {
    commit("setHit", value);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
