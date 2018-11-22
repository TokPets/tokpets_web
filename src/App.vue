<template>
  <div class="main">
        <router-view></router-view>
      <router-link to="/">Go to Index</router-link>
      <router-link to="/app">Go to App</router-link>
      <router-link to="/admin">Go to Admin</router-link>
  </div>
</template>

<script>
import { page } from 'vue-analytics'

export default {
  name: 'app',
  methods: {
    track () {
      page('/')
    }
  }
}
</script>

<style lang="less" scoped>
  @import './styles/main.less';

</style>
