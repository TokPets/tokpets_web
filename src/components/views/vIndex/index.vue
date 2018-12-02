<script>
/**
 *  ------------------------------------------------
 *  -- TokPet's Component : @view/index.component.vue --
 *  ------------------------------------------------
 *
 *
 */

// ----------------------------------------------- //
// -- Import's ----------------------------------- //
// ----------------------------------------------- //

// Imports :: Libs & Vendors
import { page } from 'vue-analytics'

// Imports :: Shared Components
import vLoaderComponent from './../../common/loading/loading.component'

import vHeaderComponent from './../../common/header/header.component'
import vFooterComponent from './../../common/footer/footer.component'

import vSliderComponent from './../../common/slider/slider.component'
import vFeaturesComponent from './../../common/features/features.component'
import vTabsComponent from './../../common/tabs/tabs.component'

import vGalleryButtonComponent from './../../common/gallery/button/gallery-button.component'
import vInstragramFeedComponent from './../../common/instragram/feed/instragram-feed.component'

// ----------------------------------------------- //

// ----------------------------------------------- //
// -- Export default component :: index.vue ------ //
// ----------------------------------------------- //
export default {

  // Component's Name
  name: 'viewIndex',

  // Component's Childs
  components: {
    vLoaderComponent,
    vHeaderComponent,
    vFooterComponent,
    vSliderComponent,
    vFeaturesComponent,
    vTabsComponent,
    vGalleryButtonComponent,
    vInstragramFeedComponent
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
      <v-loader-component></v-loader-component>
    </div>

    <!-- View Content Layer -->
    <div class="view-layout">

      <div class="view-header">
        <v-header-component></v-header-component>
      </div>

      <div class="view-section-intro">
        <v-slider-component></v-slider-component>
        <v-tabs-component></v-tabs-component>
        <v-gallery-button-component></v-gallery-button-component>
      </div>

      <div class="view-section-features">
        <v-features-component></v-features-component>
      </div>

      <div class="view-section-social">
        <v-instragram-feed-component></v-instragram-feed-component>
      </div>

      <div class="view-header">
        <v-footer-component></v-footer-component>
      </div>




    </div>


  </div>
</template>

<style lang="less" scoped>
@import (reference) "../../../styles/main.less";
.view{

    display: block;

    width: 100vw;
    height: 100vh;

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
