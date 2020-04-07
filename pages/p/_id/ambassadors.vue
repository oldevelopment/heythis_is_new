<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-2 font-weight-bold">Ambassadors</div>
      <div class="headline font-weight-normal mt-3">Ambassadors for our Portal</div>
    </div>

    <ambassadors />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import Ambassadors from '@/containers/ambassadors';

export default Vue.extend({
  layout: 'portal',

  components: {
    Ambassadors,
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
