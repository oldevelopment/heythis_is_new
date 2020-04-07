<template>
  <v-sheet v-bind="$attrs" style="position: relative;" @click="$emit('select', item)">
    <v-img :aspect-ratio="2" :lazy-src="thumbs[0]" :src="thumbs[2]" cover> </v-img>

    <div class="pa-4 d-flex align-center">
      <div
        class="headline flex-grow-1 pr-4"
        v-line-clamp:24="2"
        v-text="item.title || item.description"
      />

      <div class="d-flex flex-grow-0 justify-space-between">
        <div class="d-flex black white--text" style="border: 2px solid white !important;">
          <v-img :src="item.avatar" width="32" height="32" />

          <div class="title px-4" style="border-left: 2px solid white;">
            {{ item.site }}
          </div>
        </div>
      </div>
    </div>

    <div style="position: absolute; top: 0; right: 0;" class="d-flex">
      <div
        class="elevation-1 px-2 py-1 white--text"
        style="height: 100%; background-color: rgba(0,0,0,0.1)"
      >
        Arts
      </div>
      <div class="elevation-1 pa-1 black" style="height: 100%;">
        <v-icon color="white" v-text="icon" />
      </div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentItem } from '@/types';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => ContentItem,
    },
  },

  computed: {
    icon(): string {
      switch (this.item.channel) {
        case 'YouTube':
          return 'mdi-youtube';
        case 'Facebook':
          return 'mdi-facebook';
        case 'Instagram':
          return 'mdi-instagram';
        case 'Twitter':
          return 'mdi-twitter';
        default:
          return '';
      }
    },

    thumbs(): string[] {
      switch (this.item.channel) {
        case 'YouTube':
          return [
            this.item.metadata.thumbnails.default.url,
            this.item.metadata.thumbnails.medium.url,
            this.item.metadata.thumbnails.high.url,
          ];
        case 'Instagram':
          return [
            this.item.metadata.images.thumbnail.url,
            this.item.metadata.images.low_resolution.url,
            this.item.metadata.images.standard_resolution.url,
          ];
        default:
          return [];
      }
    },
  },
});
</script>

<style></style>
