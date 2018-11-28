<template>
  <div class="main">

      <router-view></router-view>

      <div class="nav-router">
        <router-link to="/">Go to Index</router-link>
        <router-link to="/app">Go to App</router-link>
        <router-link to="/admin">Go to Admin</router-link>
      </div>

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

<style lang="less">

  @import './styles/main.less';

  .nav-router{

    width: 100%;
    height: auto;

    a{
      padding: 0em 1em;
    }

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    display: none;

  }

</style>
