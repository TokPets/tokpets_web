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
      <li @click="setTabIndex(0)" v-bind:class="{ active: activeTabIndex == 0 }">TAB TITLE 0</li>
      <li @click="setTabIndex(1)" v-bind:class="{ active: activeTabIndex == 1 }">TAB TITLE 1</li>
    </ul>
    <div class="tabs-content">
      <div class="tab-content" v-if="activeTabIndex==0">
        TAB 0 CONTENT
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
      border-radius: 2em;
      padding: 1em;
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


</style>
