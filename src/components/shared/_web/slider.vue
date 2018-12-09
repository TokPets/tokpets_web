<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'viewIndex',
  components: {
  },
  methods: {
  },
  data () {
    return {
      msg: 'Slider'
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) "../../../styles/main.less";

h1{
  color: @color-red;
}
</style>
