<script>
/**
 *  ------------------------------------------------
 *  -- TokPet's Component : gallery-button.component.vue --
 *  ------------------------------------------------
 *
 *
 *
 */
export default {

  // Component's Name
  name: 'vGalleryButtonComponent',

  // Component's Childs
  components: {},

  // Component's Methods
  methods: {

  },

  // Component's Inputs/Parameters
  props: {},

  // Component's created function.
  created () {

  },

  // Component's Attributes or data object.
  data () {
    return {
    }
  }
}
</script>

<template>
  <div class="header main">
    <h2>GALLERY BUTTON</h2>
  </div>
</template>

<style lang="less" scoped>

  @import (reference) "../../../../styles/main.less";

  .main{

    display: block;

    width: 100vw;
    height: 2em;

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
