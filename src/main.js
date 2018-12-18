// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import App from './App'
import router from './router'

import store from './store/index'

import VueI18n from 'vue-i18n'

const firebase = require('firebase/app')

Vue.config.productionTip = false

// Initialize Firebase

var config = {
  apiKey: 'AIzaSyCfjpFwtYK3ju4OvT-wlqd8iS9INhfMcpw',
  authDomain: 'tokpetsapp.firebaseapp.com',
  databaseURL: 'https://tokpetsapp.firebaseio.com',
  projectId: 'tokpetsapp',
  storageBucket: 'tokpetsapp.appspot.com',
  messagingSenderId: '359710188847'
}

firebase.initializeApp(config)

Vue.use(VueAnalytics, {
  id: 'UA-128950882-1'
})

Vue.use(VueI18n)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
