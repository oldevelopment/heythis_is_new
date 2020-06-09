<template>
  <div>
    <v-divider />
    <div class="display-3 my-12 text-center font-weight-regular">Latest updates</div>
    <timeline :items="portal.cards" v-if="portal.cards.length" @select="selectItem" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Timeline from '@/components/timeline';
import { Portal, ContentItem } from '@/types';

export default Vue.extend({
  components: {
    Timeline,
  },

  computed: {
    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },
  },

  methods: {
    selectItem(item: ContentItem) {
      this.$store.commit('media/set:selected', item);
    },
  },
});
</script>

<style></style>
