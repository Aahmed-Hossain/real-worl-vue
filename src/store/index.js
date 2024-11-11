import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import EventService from "@/services/EventService";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },

  state: {
    events: [],
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

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },

  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event);
      commit("ADD_EVENT", event);
    },
  },
});
