<template>
  <v-sheet v-bind="$attrs" style="position: relative;">
    <v-img :aspect-ratio="1.5" :lazy-src="item.image" :src="item.image" cover> </v-img>

    <div class="mt-4 pa-4">
      <div class="display-2" v-text="item.title" />
      <div class="subtitle-1 mt-3" v-text="item.description" />

      <div class="d-flex justify-space-between mt-4 align-center">
        <div v-text="item.date.date" class="title" />

        <div class="d-flex black white--text" style="border: 2px solid white !important;">
          <v-img :src="item.avatar" width="32" height="32" />

          <div class="title px-4" style="border-left: 2px solid white;">
            {{ item.location }}
          </div>
        </div>
      </div>
    </div>

    <div style="position: absolute; top: 0; right: 0;" class="d-flex elevation-1">
      <div class="px-2 py-1 white--text" style="height: 100%; background-color: rgba(0,0,0,0.1)">
        {{ item.type }}
      </div>
      <div class="pa-1 black" style="height: 100%;">
        <v-icon color="white" v-text="icon" />
      </div>
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

  computed: {
    icon(): string {
      switch (this.item.channel) {
        case 'YouTube':
          return 'mdi-youtube';
        case 'Facebook':
          return 'mdi-facebook';
        case 'Instagram':
          return 'mdi-instagram';
        case 'Twitter':
          return 'mdi-twitter';
        default:
          return '';
      }
    },
  },
});
</script>

<style></style>
