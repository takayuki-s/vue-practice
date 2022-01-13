import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";
import axios from "../axios-auth";
import axiosRefresh from "../axios-refresh";
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
          setTimeout(() => {
            axiosRefresh
              .post(`/token?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
                grant_type: refresh_token,
                refresh_token: response.data.refreshToken,
              })
              .then((response) => {
                commit("updateIdToken", response.data.id_token);
              });
          }, response.data.expiresIn * 1000);
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
