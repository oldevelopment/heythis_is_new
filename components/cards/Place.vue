<template>
  <v-sheet class="place d-flex" elevation="2" dark>
    <v-responsive min-width="40%" max-width="40%" aspect-ratio="1">
      <v-img :src="user.avatar" width="100%" height="100%" />
    </v-responsive>

    <div class="pa-4 pt-6 text-center flex-grow-1">
      <div class="headline font-weight-bold" v-text="user.site"></div>
      <div class="title font-weight-normal" v-text="user.city"></div>

      <div class="mt-4">
        <v-chip label dark class="mt-1">{{ user.city }}</v-chip>
        <v-chip label dark class="mt-1">{{ user.profession }}</v-chip>
        <v-chip label dark class="mt-1">{{ user.genre }}</v-chip>
      </div>
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
