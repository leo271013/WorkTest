import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import Api from "../config/Api";

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state: {
    FirstApi: [],
  },
  getters: {},
  mutations: {
    getfirst(state, data) {
      state.FirstApi = data;
    },
  },
  actions: {
    async getapi({ commit }) {
      try {
        axios.get(Api.FirstApi).then((res) => {
          commit("getfirst", res.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
