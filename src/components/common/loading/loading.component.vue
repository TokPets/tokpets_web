<template>
  <div class="loader main" v-if="MESSAGE != 'LOADED' ">
    <h1>{{ MESSAGE }}</h1>
  </div>
</template>

<script>
export default {
  name: 'vLoaderComponent',
  components: {},
  methods: {
    waiting () {
      setTimeout(() => {
        this.MESSAGE = 'LOADED'
      }, this.TIME)
    }
  },
  mounted () {
    this.waiting()
  },
  data () {
    return {
      MESSAGE: ' Loading ... ',
      TIME: 2000
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  @import (reference) "../../../styles/main.less";

  .main{

    display: block;

    width: 100vw;
    height: 100vh;

    position: fixed;
    top:0px;
    left: 0px;

    background-color: white;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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

  }


</style>
