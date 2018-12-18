<script>
/**
 *  ----------------------------------------------------
 *  -- TokPet's Component : @view/index.component.vue --
 *  ----------------------------------------------------
 *
 *
 */

// ----------------------------------------------- //
// -- Import's ----------------------------------- //
// ----------------------------------------------- //

// Imports :: Libs & Vendors
import { page } from 'vue-analytics'

// Imports ::   Sections Components
import loginSection from './s0_login/login.section'
import signupSection from './s1_signup/signup.section'
import forgotPasswordSection from './s2_forgot_password/forgot_password.section'

// Imports :: Shared Components
import tabsComponent from './../../../shared/_app/tabs/tabs.component'

// ----------------------------------------------- //

// ----------------------------------------------- //
// -- Export default component :: index.vue ------ //
// ----------------------------------------------- //
export default {

  // Component's Name
  name: 'appViewLogin',

  // Component's Childs
  components: {
    tabsComponent,
    loginSection,
    signupSection,
    forgotPasswordSection
  },

  // Component's Methods
  methods: {

    /**
     * Method :: track()
     */
    track () {
      page('/')
    }

  },

  // Component's created function.
  created () {
    document.title = 'TokPets Collars and Trackers '
  },

  // Component's Attributes or data object.
  data () {
    return {}
  }
}
// ----------------------------------------------- //
</script>

<template>
  <div class="view">

    <!-- View Loading Layer -->
    <div class="view-loading">

    </div>

    <!-- View Content Layer -->
    <div class="view-layout">

      <div class="view-header"></div>

      <div class="view-logo">
        <img src="@/assets/logos/small_square_logo.png" alt="TokPets Logo">
        <h1>TÕK</h1>
        <h2>TRACKER</h2>
      </div>

      <div class="view-sections">

        <tabs-component/>

      </div>





    </div>

  </div>
</template>

<style lang="less" scoped>

  @import (reference) "../../../../styles/main.less";
 .view-layout{
    font-family: 'MyWebFont';
 }
 .view-logo{
   img{
     width: 30vw;
     display: block;
     margin: 5em auto;
     margin-bottom: 2.5em;
   }
   h1,h2{
    display: block;
    text-align: center;
    position: relative;
    margin: 0em auto;
   }
   h1{
    font-size: 5em;
    letter-spacing: 0.35em;
    text-indent: 0.35em;
   }
   h2{
    font-size: 2.5em;
    letter-spacing: 0.25em;
    text-indent: 0.25em;
   }
 }
 .view-sections{
  width: auto;
  display: block;
  margin-top: 5em;
 }
</style>
