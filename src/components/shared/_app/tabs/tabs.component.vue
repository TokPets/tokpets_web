<script>
/**
 *  ----------------------------------------------------
 *  -- TokPet's Component : @shared/_app/tabs/tabs.component --
 *  ----------------------------------------------------
 *
 *
 */

// ----------------------------------------------- //
// -- Import's ----------------------------------- //
// ----------------------------------------------- //

// Imports :: Libs & Vendors

// Imports :: Shared Components

// ----------------------------------------------- //

// ----------------------------------------------- //
// -- Export default component :: index.vue ------ //
// ----------------------------------------------- //
export default {

  // Component's Name
  name: 'tabsComponent',

  // Component's Childs
  components: {

  },

  // Component's Methods
  methods: {
    setTabIndex (index) {
      this.activeTabIndex = index
      this.currentImg = index
    }
  },

  // Component's created function.
  created () {
  },

  // Component's Attributes or data object.
  data () {
    return {
      activeTabIndex: 0,
      currentImg: 0,
      imgList: ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x151', 'http://via.placeholder.com/350x152']
    }
  }
}
// ----------------------------------------------- //
</script>

<template>
  <div class="tabs">
    <ul class="tabs-header">
      <li @click="setTabIndex(0)" v-bind:class="{ active: activeTabIndex == 0 }"> - SIGN IN - </li>
      <li @click="setTabIndex(1)" v-bind:class="{ active: activeTabIndex == 1 }"> - SIGN UP - </li>
    </ul>
    <div class="tabs-content">


      <div class="tab-content" v-if="activeTabIndex==0">
        <form>

          <div class="form-input">
            <img src="../../../../assets/icons/email.png">
            <input type="email">
          </div>

          <div class="form-input">
            <img src="../../../../assets/icons/lock.png">
            <input type="password">
          </div>

          <button>
            SIGN IN
          </button>

          <h4>
            Forgot your password?
          </h4>

        </form>
      </div>


      <div class="tab-content" v-if="activeTabIndex==1">
        TAB 1 CONTENT
      </div>



    </div>
  </div>
</template>

<style lang="less" scoped>

  @import (reference) "../../../../styles/main.less";

      .tabs{
          width: 100%;
          display: block;
      }

      .tabs-header{
            width: 100%;
            background-color: white;
            border-radius: 2em;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-align-content: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start;
            li{

              cursor: pointer;

            font-weight: 100;
            letter-spacing: 2px;
            border-radius: 2em;
            padding: 0.5em 1em;
            text-align: center;

            -webkit-order: 0;
            -ms-flex-order: 0;
            order: 0;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            -webkit-align-self: auto;
            -ms-flex-item-align: auto;
            align-self: auto;

            &.active{
            background-color: @color-black;
            color: @color-white;
            }
            }
      }


      .form-input{

        width: 100%;
        padding: 0.25em 0.25em;
        box-sizing: border-box;

        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;

        border-bottom: 1px dotted gray;

        &:first-child{
          padding-top: 1.5em;
        }

          img{
            height: 1em;
            padding: 0.25em;
          }

          input{

            padding: 0.25em;
            background-color: rgba(0,0,0,0);
            border: 0px;

            font-family: 'MindSet';
            color: #7d766f;

            -webkit-order: 0;
            -ms-flex-order: 0;
            order: 0;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            -webkit-align-self: auto;
            -ms-flex-item-align: auto;
            align-self: auto;
          }

      }

      button{
          background-color: #282828;
          color: #ffffff;
          cursor: pointer;
          font-weight: 100;
          letter-spacing: 2px;
          border-radius: 2em;
          padding: 0.5em 1em;
          text-align: center;
          border: 0px;
          display: block;
          margin: 2em auto;
      }

      h4{
          display: block;
          margin: 2em auto;
          text-align: center;
      }


</style>
