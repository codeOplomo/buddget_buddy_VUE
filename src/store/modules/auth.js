// src/store/modules/auth.js
const state = {
  isAuthenticated: false,
  token: localStorage.getItem('token') || null 
};

const mutations = {
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setToken(state, token) {
    console.log('Setting token:', token);
    state.token = token;
    localStorage.setItem('token', token);
  }
};

const actions = {
  login({ commit }, token) {
    // Logic to perform login
    commit('setIsAuthenticated', true);
    commit('setToken', token);
  },
  logout({ commit }) {
    // Logic to perform logout
    commit('setIsAuthenticated', false);
    commit('setToken', null);
    localStorage.removeItem('token');
  }
};

export default {
  state,
  mutations,
  actions
};
