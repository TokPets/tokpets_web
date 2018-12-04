<script>
/**
 *  ------------------------------------------------
 *  -- TokPet's Component : header.component.vue --
 *  ------------------------------------------------
 *
 *
 *
 */
export default {

  // Component's Name
  name: 'vHeaderComponent',

  // Component's Childs
  components: {},

  // Component's Methods
  methods: {
    vmMenuToogle () {
      this.DATA.MENU.isOpen = !this.DATA.MENU.isOpen
    }
  },

  // Component's Inputs/Parameters
  props: {},

  // Component's created function.
  created () {

  },

  // Component's Attributes or data object.
  data () {
    return {
      DATA: {
        MENU: {
          isOpen: false,
          items: []
        }
      }
    }
  }
}
</script>

<template>
  <div class="header main">

    <div class="layout-columns row ">

      <div class="home-text">TOK PETS</div>

      <div class="title-text">LOG IN </div>

      <div class="menu-button">
        <i class="fas fa-bars" v-if="!DATA.MENU.isOpen" @click="vmMenuToogle()"></i>
        <i class="fas fa-times" v-if="DATA.MENU.isOpen" @click="vmMenuToogle()"></i>
      </div>

      <div class="cart-icon">
        <i class="fas fa-cart-plus"></i>
      </div>

    </div>

    <div class="row">
      <ul class="menu-content" v-if="DATA.MENU.isOpen">
        <li class="menu-item"><router-link to="/">Go to Index</router-link></li>
        <li class="menu-item"><router-link to="/app">Go to App</router-link></li>
        <li class="menu-item"><router-link to="/admin">Go to Admin</router-link></li>
        <li class="menu-item"></li>
      </ul>
    </div>

  </div>
</template>

<style lang="less" scoped>

  @import (reference) "../../../styles/main.less";

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
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap:nowrap;
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
