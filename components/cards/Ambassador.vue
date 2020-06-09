<template>
  <v-sheet class="ambassador px-8 pb-4 text-center" color="transparent">
    <v-responsive :aspect-ratio="1">
      <v-avatar width="100%" height="100%" style="border: solid 4px white;">
        <v-img :src="user.avatar" />
      </v-avatar>
    </v-responsive>

    <div class="white--text mt-4">
      <div class="headline font-weight-bold" v-text="user.site"></div>
      <div class="title font-weight-normal" v-text="user.city"></div>
      <div class="text-truncate" v-text="user.description"></div>
    </div>

    <div class="mt-4">
      <v-chip label dark class="mt-1">{{ user.city }}</v-chip>
      <v-chip label dark class="mt-1">{{ user.profession }}</v-chip>
      <v-chip label dark class="mt-1">{{ user.genre }}</v-chip>
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

<style lang="scss">
.ambassador {
  position: relative;
  background: linear-gradient(to bottom, #fff, #fff 40%, #000 40%, #000 100%);
}
</style>
