<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-2 font-weight-bold">All videos</div>
      <div class="headline font-weight-normal mt-3">
        Created and shared by our members
      </div>
    </div>

    <videos />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import Videos from '@/containers/videos';

export default Vue.extend({
  layout: 'portal',

  components: {
    Videos,
  },

  computed: {},

  async fetch({ store, params }) {
    await store.dispatch('portals/fetch:portal', params.id);
    await store.dispatch('portalSettings/fetch:settings', params.id);
  },
});
</script>

<style></style>
