import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import FormBuilder from "../views/FormBuilder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "user",
    component: UserView,
  },
  {
    path: "/form",
    name: "form",
    component: FormBuilder,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
