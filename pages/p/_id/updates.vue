<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-3 font-weight-bold">All updates</div>
      <div class="headline font-weight-normal mt-3">
        Created and shared by our members.
      </div>
    </div>

    <updates />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import Updates from '@/containers/portal-updates';

export default Vue.extend({
  layout: 'portal',

  components: {
    Updates,
  },

  computed: {},

  async fetch({ store, params }) {
    await store.dispatch('portals/fetch:portal', params.id);
    await store.dispatch('portalSettings/fetch:settings', params.id);
  },
});
</script>

<style></style>
