<script>
/**
 *  ------------------------------------------------
 *  -- TokPet's Component : loading.component.vue --
 *  ------------------------------------------------
 *
 *
 *
 */
export default {

  // Component's Name
  name: 'vLoaderComponent',

  // Component's Childs
  components: {},

  // Component's Methods
  methods: {

    /**
     * Method :: waiting()
     * @param void
     * @return void
     */
    vmWaiting () {
      setTimeout(() => {
        this.SHOW = false
      }, this.TIME)
    }
  },

  // Component's Inputs/Parameters
  props: {},

  // Component's created function.
  created () {
    this.vmWaiting()
  },

  // Component's Attributes or data object.
  data () {
    return {
      SHOW: true,
      MESSAGE: 'LOADING LOGO',
      TIME: 2000
    }
  }
}
</script>

<template>
  <div class="loader main" v-if="SHOW">
    <h1>{{ MESSAGE }}</h1>
  </div>
</template>

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
