<template>
  <component
    v-bind="$attrs"
    @click="$emit('click', $event)"
    class="content-card"
    :is="contentType"
    :item="item"
  />
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { ContentItem, Nullable } from '@/types';
import Facebook from './Facebook.vue';
import Twitter from './Twitter.vue';
import Youtube from './Youtube.vue';
import Instagram from './Instagram.vue';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => ContentItem,
    },
  },

  computed: {
    contentType(): Nullable<VueConstructor> {
      switch (this.item.channel) {
        case 'Facebook':
          return Facebook;
        case 'YouTube':
          return Youtube;
        case 'Twitter':
          return Twitter;
        case 'Instagram':
          return Instagram;
        default:
          return null;
      }
    },
  },
});
</script>
