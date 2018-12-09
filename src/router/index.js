import Vue from 'vue'
import Router from 'vue-router'

import appViewLogin from '@/components/views/vApp/v0_Login/login.view.component.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App/Login',
      component: appViewLogin
    }
  ],
  scrollBehavior: () => ({ y: 0 })
})
