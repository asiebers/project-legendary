import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedRecipe: {}
  },
  mutations: {
    setSelectedRecipe(state, payload) {
      state.selectedRecipe = payload;
      console.log("store is updated: ", state, payload);
    }
  },
  actions: {},
  modules: {}
});
