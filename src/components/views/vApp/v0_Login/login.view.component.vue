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

// Imports :: Shared Components
import loginSection from './s0_login/login.section'
import signupSection from './s1_signup/signup.section'
import forgotPasswordSection from './s2_forgot_password/forgot_password.section'

// ----------------------------------------------- //

// ----------------------------------------------- //
// -- Export default component :: index.vue ------ //
// ----------------------------------------------- //
export default {

  // Component's Name
  name: 'appViewLogin',

  // Component's Childs
  components: {
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

      <h2>LOGIN And SIGNUP VIEW</h2>

    </div>

  </div>
</template>

<style lang="less" scoped>

  @import (reference) "../../../../styles/main.less";

  .view{
    background-color: @color-cream;
  }

</style>
