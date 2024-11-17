import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Default from "@/layouts/default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Default,
      redirect: '',
      children: [
        {
          path: '/home',
          alias: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/advantages',
          name: 'advantages',
          component: () => import('../views/Advantages.vue'),
        },
        {
          path: '/strict-mode',
          name: 'strict-mode',
          component: () => import('../views/StrictMode.vue'),
        },
        {
          path: '/key-concepts',
          name: 'key-concepts',
          component: () => import('../views/KeyConcepts.vue'),
        },
      ]
    },

  ],
})

export default router
