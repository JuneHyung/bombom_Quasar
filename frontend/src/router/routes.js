
const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('./../layouts/MainPage.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('./../layouts/Notice.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('./../layouts/Menu.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('./../layouts/Find.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./../layouts/Login.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
