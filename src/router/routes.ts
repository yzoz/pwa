import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/send',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/contactPage.vue') }]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/loginPage.vue') }]
  },
  {
    path: '/cctv',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/4g',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/satellite',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/cashbox',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/alarm',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/gate',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/intercom',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/light',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/net',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },
  {
    path: '/plug',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cctvPage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
