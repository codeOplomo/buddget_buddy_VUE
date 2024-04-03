// src/store/modules/auth.js
const state = {
    isAuthenticated: false
  };
  
  const mutations = {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  };
  
  const actions = {
    login({ commit }) {
      // Logic to perform login
      commit('setIsAuthenticated', true);
    },
    logout({ commit }) {
      // Logic to perform logout
      commit('setIsAuthenticated', false);
    }
  };
  
  export default {
    state,
    mutations,
    actions
  };
  