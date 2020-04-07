<template>
  <base-card class="content-card--twitter" icon="mdi-twitter"> </base-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentItem } from '@/types';

import BaseCard from './Base.vue';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => ContentItem,
    },
  },

  components: {
    BaseCard,
  },
});
</script>

<style></style>
