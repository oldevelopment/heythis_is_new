<template>
  <v-carousel cycle show-arrows-on-hover v-if="sources.length > 1">
    <v-carousel-item
      v-for="(item, i) in sources"
      :key="i"
      :src="item.url"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  <v-img v-else v-bind="$attrs" cover width="100%" :lazy-src="lazy" :src="source" />
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentItem, Nullable, CarouselItem } from '@/types';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => ContentItem,
    },
  },

  computed: {
    source(): Nullable<string> {
      switch (this.item.channel) {
        case 'Instagram':
          return this.item.metadata.images.standard_resolution.url;
        default:
          return null;
      }
    },

    sources(): Nullable<CarouselItem[]> {
      switch (this.item.channel) {
        case 'Instagram':
          return this.item.metadata.carousel.filter(({ url }) => !!url);
        default:
          return [];
      }
    },
  },
});
</script>
