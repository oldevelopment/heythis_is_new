<template>
  <component :is="viewer" :item="item" />
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { ContentItem, Nullable } from '@/types';

import Video from './Video.vue';
import Image from './Image.vue';
import Carousel from './Carousel.vue';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => Nullable<ContentItem>,
    },
  },

  computed: {
    viewer(): Nullable<VueConstructor> {
      if (!this.item) return null;

      switch (this.item.type) {
        case 'Video':
          return Video;
        case 'Image':
          return Image;
        case 'Carousel':
          return Carousel;
        default:
          return null;
      }
    },
  },
});
</script>

<style></style>
