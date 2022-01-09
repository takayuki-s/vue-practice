import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import Users from "./views/Users.vue";
// import UsersPosts from "./views/UsersPosts.vue";
// import UsersProfile from "./views/UsersProfile.vue";
// import HeaderHome from "./views/HeaderHome.vue";
// import HeaderUsers from "./views/HeaderUsers.vue";
const Home = () => import(/*webpackChunkName: "Home"*/ "./views/Home.vue");
const Users = () => import(/*webpackChunkName: "Users"*/ "./views/Users.vue");
const UsersPosts = () =>
  import(/*webpackChunkName: "UsersPosts"*/ "./views/UsersPosts.vue");
const UsersProfile = () =>
  import(/*webpackChunkName: "UsersProfile"*/ "./views/UsersProfile.vue");
const HeaderHome = () =>
  import(/*webpackChunkName: "HeaderHome"*/ "./views/HeaderHome.vue");
const HeaderUsers = () =>
  import(/*webpackChunkName: "HeaderUsers"*/ "./views/HeaderUsers.vue");
import Comments from "./views/Comments.vue";
import Login from "./views/Login.vue";
import Resister from "./views/Resister.vue";

// Vue.useとすることでVue専用のプラグインを使うことができる
Vue.use(Router);

export default new Router({
  mode: "history",
  // URLとコンポーネントをマッピング
  routes: [
    {
      path: "/",
      component: Comments,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/resister",
      component: Resister,
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers,
      },
      props: {
        default: true,
        header: false,
      },
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "users-id-profile" },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      this.app.$root.$once("triggerScroll", () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash,
          };
        }
        resolve(position);
      });
    });
  },
});
