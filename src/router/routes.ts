import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/order',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/orderPage.vue') }]
  },
  {
    path: '/order/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/orderPage.vue') }]
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
    children: [{ path: '', component: () => import('pages/serv/inPage.vue') }]
  },
  {
    path: '/satellite',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/satellitePage.vue') }]
  },
  {
    path: '/cashbox',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/cashboxPage.vue') }]
  },
  {
    path: '/alarm',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/alarmPage.vue') }]
  },
  {
    path: '/gate',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/gatePage.vue') }]
  },
  {
    path: '/intercom',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/intercomPage.vue') }]
  },
  {
    path: '/light',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/lightPage.vue') }]
  },
  {
    path: '/net',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/netPage.vue') }]
  },
  {
    path: '/plug',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/serv/plugPage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
