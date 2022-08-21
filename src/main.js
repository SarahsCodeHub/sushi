import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import StartNewRestaurant from './views/StartNewRestaurant.vue'
import Restaurant from './components/Restaurant.vue'

const routes = [
  { path: "/", component: StartNewRestaurant },
  { path: "/restaurant", component: Restaurant },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

createApp(App)
.use(router)
.mount('#app')
