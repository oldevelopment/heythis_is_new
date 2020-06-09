<template>
  <base-card class="content-card--instagram" style="overflow: hidden;" v-bind="$attrs">
    <template v-slot:icon>
      <v-icon color="white">mdi-instagram</v-icon>
    </template>

    <v-img
      width="100%"
      min-height="100"
      :aspect-ratio="aspectRatio"
      :lazy-src="sources[0]"
      :src="sources[quality]"
    />

    <div class="ma-2" v-if="!hideDetails && (item.description || item.title)">
      <div v-if="!clipped" v-text="item.description || item.title"></div>
      <div v-else v-line-clamp:24="5" v-text="item.description || item.title"></div>
    </div>
  </base-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentItem } from '@/types';


import { VideoJsPlayerOptions } from 'video.js';
import moment from 'moment';
import BaseCard from './Base.vue';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => ContentItem,
    },

    clipped: {
      type: Boolean,
      default: true,
    },

    hideDetails: {
      type: Boolean,
    },

    aspectRatio: {
      type: [Number, String],
    },

    quality: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      isActive: false,
    };
  },

  components: {
    BaseCard,
  },

  computed: {
    sources(): string[] {
      return [
        this.item.metadata.images.thumbnail.url,
        this.item.metadata.images.low_resolution.url,
        this.item.metadata.images.standard_resolution.url,
      ];
    },

    date(): string {
      return moment(this.item.date).calendar();
    },

    videoOptions(): VideoJsPlayerOptions {
      return {
        sources: [
          {
            src: this.item.metadata.videos.standard_resolution.url,
            type: 'video/mp4',
          },
        ],
        controls: true,
        autoplay: false,
        preload: 'auto',
      };
    },
  },
});
</script>

<style></style>
