import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LikeNumber from "./components/LikeNumber.vue";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-d048c/databases/(default)/documents";

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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
