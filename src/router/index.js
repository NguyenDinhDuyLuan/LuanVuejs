import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/HomePage.vue";
import About from "../view/AboutPage.vue";
import Explore from "../view/ExplorePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "router-link-active",
});

export default router;
