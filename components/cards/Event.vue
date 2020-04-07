<template>
  <v-sheet v-bind="$attrs" class="d-flex">
    <v-img
      min-width="30%"
      :aspect-ratio="2"
      max-width="30%"
      eager
      :lazy-src="item.image"
      :src="item.image"
      cover
    >
    </v-img>
    <div class="flex-grow-1 pa-4">
      <div class="display-1" v-text="item.title" />
      <div class="body-1" v-text="'@' + item.location" />
      <div class="subtitle-1 mt-3" v-text="item.description" />
    </div>
    <div class="black white--text text-right pa-2 title">
      <div v-text="item.date.day" />
      <div v-text="item.date.month" class="text-uppercase" />
      <div>'{{ item.date.year }}</div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import { EventItem } from '@/types';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => EventItem,
    },
  },
});
</script>

<style></style>
