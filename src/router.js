import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

// Vue.useとすることでVue専用のプラグインを使うことができる
Vue.use(Router);

export default new Router({
  mode: "history",
  // URLとコンポーネントをマッピング
  routes: [
    { path: "/", component: Home },
    { path: "/users/:id", component: Users, props: true },
  ],
});
