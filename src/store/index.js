import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },

  state: {
    categories: [
      "Sustainability",
      "Nature",
      "Animal Walfare",
      "Housing ",
      "Education",
      "Food",
      "Community",
    ],
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
  },
  mutations: {},
  actions: {},
});
