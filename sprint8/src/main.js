import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import './style.css'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import WelcomeComponent from './components/WelcomeComponent.vue'

const routes = [
  {
    path: "/",
    component: WelcomeComponent
  }
];

// router instance setup
const router = createRouter({ 
  history: createWebHistory(), // uses the WebHistory API in the browser (in order to go to previous routes)
  routes
});

createApp(App).use(router).mount('#app')