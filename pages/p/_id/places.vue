<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-2 font-weight-bold">Places</div>
      <div class="headline font-weight-normal mt-3">
        All places, locations, venues, bars, theaters that host and support our community.
      </div>
    </div>

    <places />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import Places from '@/containers/places';

export default Vue.extend({
  layout: 'portal',

  components: {
    Places,
  },

  computed: {},

  async fetch({ store, params }) {
    await store.dispatch('users/fetch:latest');
    await store.dispatch('portals/fetch:portal', params.id);
    await store.dispatch('portalSettings/fetch:settings', params.id);
  },
});
</script>

<style></style>
