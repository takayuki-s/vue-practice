import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";
import getters from "./getters";
import axios from "../axios-auth";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    message: "",
    idToken: null,
  },
  getters,
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
  },
  actions: {
    login({ commit }, authData) {
      axios
        .post(
          `accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          commit("updateIdToken", response.data.idToken);
        });
    },
  },
  modules: {
    count,
  },
});
