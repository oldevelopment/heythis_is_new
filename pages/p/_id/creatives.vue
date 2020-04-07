<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-2 font-weight-bold">All creatives</div>
      <div class="headline font-weight-normal mt-3">
        Browse all our creatives who create our vibrant arts and culture.
      </div>
    </div>

    <creatives />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import Creatives from '@/containers/creatives';

export default Vue.extend({
  layout: 'portal',

  components: {
    Creatives,
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
