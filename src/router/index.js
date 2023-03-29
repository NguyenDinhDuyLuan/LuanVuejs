import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/HomePage.vue";
import About from "../view/AboutPage.vue";
import Explore from "../view/ExplorePage.vue";
import Modal from "../view/ModalPage.vue";
import SlotExample from "../view/SlotPage.vue";
import SlotModal from "../view/SlotModalPage.vue";
import Alert from "../view/AlertPage.vue";

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
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/slot",
    name: "Slot",
    component: SlotExample,
  },
  {
    path: "/slotModal",
    name: "SlotModal",
    component: SlotModal,
  },
  {
    path: "/alert",
    name: "Alert",
    component: Alert,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "router-link-active",
});

export default router;
