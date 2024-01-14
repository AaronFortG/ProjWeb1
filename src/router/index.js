import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/stats/:playerID',
      name: 'stats',
      component: () => import('../views/StatsView.vue')
    },

    {
      path: '/create-arena',
      name: 'createArena',
      component: () => import('../views/CreateArenaView.vue')
    },
    {
      path: '/join-arena',
      name: 'joinArena',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JoinGameView.vue')
    },
    {
      path: '/filter-arenas',
      name: 'filterArenas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FilterGamesView.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue')
    },
    {
      path: '/last-games/:playerID',
      name: 'last-games',
      component: () => import('../views/LastGamesView.vue')
    },
    {
      path: '/list-players',
      name: 'listPlayers',
      component: () => import('../views/RankingView.vue')
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
      path: '/game-logs/:arenaID',
      name: 'gameLogs',
      props: true, // Enable passing route params as props
      component: () => import('../views/GameLogsView.vue')
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('../views/BagView.vue')
    },
    {
      path: '/game/:arenaID',
      name: 'game',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/loading-page/:arenaID',
      name: 'loading-page',
      component: () => import('../views/LoadingPageView.vue')
    },
    {
      path: '/create-attack',
      name: 'create-attack',
      component: () => import('../views/CreateAttack.vue')
    }
  ]
})

export default router
