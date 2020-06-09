<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-3 font-weight-bold">All events</div>
      <div class="headline font-weight-normal mt-3">
        Events to meet, greet and enjoy our creatives work from up close and personal.
      </div>
    </div>

    <events />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import Events from '@/containers/portal-events';

export default Vue.extend({
  layout: 'portal',

  components: {
    Events,
  },

  computed: {},

  async fetch({ store, params }) {
    await store.dispatch('portals/fetch:portal', params.id);
    await store.dispatch('portalSettings/fetch:settings', params.id);
  },
});
</script>

<style></style>
