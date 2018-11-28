import Vue from 'vue'
import Router from 'vue-router'

import viewIndex from '@/components/views/vIndex/index.vue'
import viewApp from '@/components/views/vApp/index.vue'
import viewAdmin from '@/components/views/vAdmin/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Web',
      meta: { title: 'Team Member' },
      component: viewIndex
    },
    {
      path: '/app',
      name: 'App',
      component: viewApp
    },
    {
      path: '/admin',
      name: 'Admin',
      component: viewAdmin
    }
  ],
  scrollBehavior: () => ({ y: 0 })
})
