import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

import "./style.css";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import WelcomeComponent from "./views/WelcomeComponent.vue";
import SpaceshipCard from "./views/SpaceshipCard.vue";
import Register from './views/Register.vue'
import Login from './views/Login.vue'

const routes = [
  {
    path: "/",
    component: WelcomeComponent,
  },
  {
    path: "/details/:name",
    component: SpaceshipCard
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/login",
    component: Login
  }
];

// router instance setup
const router = createRouter({
  history: createWebHistory(), // uses the WebHistory API in the browser (in order to go to previous routes)
  routes,
});

createApp(App).use(router).use(store).mount("#app");
