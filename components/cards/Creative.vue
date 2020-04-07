<template>
  <v-sheet class="creative" elevation="2" dark>
    <v-responsive :aspect-ratio="1">
      <v-img :src="user.avatar" width="100%" height="100%" />
    </v-responsive>

    <div class="pa-4 text-center">
      <div class="headline font-weight-bold" v-text="user.site"></div>
      <div class="title font-weight-normal" v-text="user.city"></div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import { UserProfile } from '@/types';

export default Vue.extend({
  props: {
    user: {
      type: Object as () => UserProfile,
      default: null,
    },
  },
});
</script>
