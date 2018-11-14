import Vue from 'vue'
import Router from 'vue-router'
import viewIndex from '@/components/views/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: viewIndex
    }
  ]
})
