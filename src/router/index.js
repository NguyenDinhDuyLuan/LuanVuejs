import { createRouter, createWebHistory } from "vue-router";
// Khai báo các trang web
import Home from "../view/HomePage.vue";
import About from "../view/AboutPage.vue";
import Explore from "../view/ExplorePage.vue";
import Modal from "../view/ModalPage.vue";
import SlotExample from "../view/SlotPage.vue";
import SlotModal from "../view/SlotModalPage.vue";
import Alert from "../view/AlertPage.vue";
import Card from "../view/CardPage.vue";
import Flag from "../view/FlagPage.vue";

// Tạo đường dẫn cho các trang web riêng biệt
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card",
    name: "Card",
    component: Card,
  },
  {
    path: "/flag",
    name: "Flag",
    component: Flag,
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
