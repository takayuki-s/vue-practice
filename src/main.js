import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LikeNumber from "./components/LikeNumber.vue";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-d048c/databases/(default)/documents";
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.get["Accept"] = "application/json";

const interceptorRequest = axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const interceptorResponse = axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.request.eject(0);
axios.interceptors.response.eject(interceptorResponse);

router.beforeEach((to, from, next) => {
  if (to.path === "/users/1") {
    next({ path: "/" });
  }
  next();
});

Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function (value) {
  return value.toUpperCase();
});
Vue.mixin({});

store.dispatch("autoLogin").then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
