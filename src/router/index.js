import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/game-over',
      name: 'gameOver',
      component: () => import('../views/GameOverView.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/StatsView.vue')
    },
    {
      path: '/create-arena',
      name: 'createArena',
      component: () => import('../views/CreateArenaView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/last-games',
      name: 'last-games',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/list-players',
      name: 'listPlayers',
      component: () => import('../views/listPlayers.vue')
    },
    {
      path: '/player-info',
      name: 'playerInfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlayerInfoView.vue')
    },
    {
      path: '/game-logs',
      name: 'gameLogs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GameLogsView.vue')
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('../views/BagView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    }
  ]
})

export default router
