<template>
  <v-container v-if="portal">
    <v-row justify="center">
      <v-col cols="12" xl="8">
        <portal-header :portal="portal" :settings="settings" flat />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" xl="8">
        <masonry-grid :items="portal.cards" @select="selectItem">
          <template v-slot:item="{ item }">
            <content-card :item="item" :clipped="false" class="mb-5" elevation="1" />
          </template>
        </masonry-grid>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import PortalHeader from '@/components/portal-header';
import { Portal, PortalSettings, ContentItem } from '@/types';
import { Masonry as MasonryGrid } from '@/components/grids';
import ContentCard from '@/components/cards/Content.vue';

export default Vue.extend({
  layout: 'portal',

  components: {
    PortalHeader,
    MasonryGrid,
    ContentCard,
  },

  computed: {
    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },

    settings(): PortalSettings {
      return this.$store.getters['portalSettings/get:current'];
    },
  },

  async fetch({ store, params }) {
    await store.dispatch('portalSettings/fetch:settings', params.id);
    await store.dispatch('portals/fetch:portal', params.id);
  },

  methods: {
    selectItem(item: ContentItem) {
      this.$store.commit('media/set:selected', item);
    },
  },
});
</script>

<style></style>
