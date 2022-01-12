import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";
import axios from "../axios-auth";
import router from "../router";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    message: "",
    idToken: null,
  },
  getters: {
    idToken: (state) => state.idToken,
  },
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
          router.push("/");
        });
    },
    register({ commit }, authData) {
      axios
        .post(`accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          commit("updateIdToken", response.data.idToken);
          router.push("/");
        });
    },
  },
  modules: {
    count,
  },
});
