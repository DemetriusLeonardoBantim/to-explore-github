import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../Pages/Dashboard/Home.vue";
import Repository from "../Pages/Repository/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hash: false,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/repository",
      name: "Repository",
      component: Repository
    }
  ]
});
