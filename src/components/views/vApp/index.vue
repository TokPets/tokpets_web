<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
//  import firebase from 'firebase'
import { page } from 'vue-analytics'

export default {
  name: 'viewIndex',
  methods: {
    track () {
      page('/')
    }
  },
  data () {
    return {
      msg: ' Welcome to Toks App '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
