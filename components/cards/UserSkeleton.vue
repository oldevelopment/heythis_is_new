<template>
  <base-card>
    <v-skeleton-loader type="card" width="100%" height="100%"> </v-skeleton-loader>
  </base-card>
</template>

<script>
import Vue from 'vue';
import BaseCard from './Base.vue';

export default Vue.extend({
  components: {
    BaseCard,
  },
});
</script>
