<template>
  <v-row>
    <v-col cols="12" sm="6" v-for="video in videos" :key="video.id" elevation="0">
      <video-card
        :item="video"
        hide-details
        elevation="1"
        :aspect-ratio="16 / 9"
        :quality="2"
        height="100%"
        min-height="100%"
        @select="selectItem"
        tile
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portal, ContentItem } from '@/types';

import VideoCard from '@/components/cards/Video.vue';

export default Vue.extend({
  components: {
    VideoCard,
  },

  computed: {
    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },

    videos(): ContentItem[] {
      return this.portal.cards.filter((card) => card.type === 'Video');
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
