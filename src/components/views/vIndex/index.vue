<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-loader-component></v-loader-component>
  </div>
</template>

<script>
import { page } from 'vue-analytics'

import vLoaderComponent from './sections/vLoader'

export default {
  name: 'viewIndex',
  components: {
    vLoaderComponent
  },
  methods: {
    track () {
      page('/')
    }
  },
  data () {
    return {
      msg: ' Welcome to Index v2 '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import (reference) "../../../styles/main.less";

h1{
  color: @color-red;
}

</style>
