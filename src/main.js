import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function (value) {
  console.log("filter");
  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("global mixin");
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
