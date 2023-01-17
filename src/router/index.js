import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: '/home'
  },
  {
    path: '/home',
    // name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/ability',
    component: () => import('../views/abilitypage/index.vue')
  },
  {
    path: '/ability-detail/:id',
    component: () => import('../views/abilitypage/ListDetails.vue')
  },
  {
    path: '/device',
    component: () => import('../views/devicepage/index.vue'),
    children: []
  },
  {
    path: '/device-detail/:id',
    component: () => import('../views/devicepage/tabs/ListDetails.vue'),
  },
  {
    path: '/service',
    component: () => import('../views/servicepage/index.vue'),
  },
  {
    path: '/service/35',
    component: () => import('../views/servicepage/Help.vue'),
  },
  {
    path: '/service/36',
    component: () => import('../views/servicepage/Document.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router