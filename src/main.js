import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
Vue.directive("border", function (el, binding) {
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg;
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem";
  }
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
