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
    path: "/./",
    name: "About",
    component: About,
  },
  {
    path: "/././",
    name: "Explore",
    component: Explore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
