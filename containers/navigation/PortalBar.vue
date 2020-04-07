<template>
  <portal-bar :portal="portal" />
</template>

<script lang="ts">
import Vue from 'vue';
import PortalBar from '@/components/navbars/PortalBar.vue';
import { Portal } from '@/types';

export default Vue.extend({
  components: {
    PortalBar,
  },

  computed: {
    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },
  },
});
</script>

<style></style>
