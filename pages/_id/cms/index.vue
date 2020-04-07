<template>
  <div>cms</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portal } from '@/types';

export default Vue.extend({
  layout: 'cms',

  computed: {
    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },
  },

  mounted() {
    this.$router.replace('cms/pagebuilder/header');
  },

  async fetch({ store, params }) {
    await store.dispatch('portalSettings/fetch:settings', params.id);
    await store.dispatch('portals/fetch:portal', params.id);
  },
});
</script>

<style></style>
