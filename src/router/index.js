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
    path: '/device',
    component: () => import('../views/devicepage/index.vue'),
    children: []
  },
  {
    path: '/device-detail/:id',
    component: () => import('../views/devicepage/tabs/ListDetails.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router