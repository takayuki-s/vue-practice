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
    autoLogin({ commit }) {
      const idToken = localStorage.getItem("idToken");
      if (!idToken) return;
      commit("updateIdToken", idToken);
    },
    login({ commit, dispatch }, authData) {
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
          localStorage.setItem("idToken", response.data.idToken);
          setTimeout(() => {
            dispatch("refreshIdToken", response.data.refreshToken);
          }, response.data.expiresIn * 1000);
          router.push("/");
        });
    },
    refreshIdToken({ commit, dispatch }, refreshToken) {
      axiosRefresh
        .post(`/token?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        })
        .then((response) => {
          commit("updateIdToken", response.data.id_token);
          setTimeout(() => {
            dispatch("refreshIdToken", response.data.refresh_token);
          }, response.data.expires_in * 1000);
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
