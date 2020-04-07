<template>
  <v-sheet v-bind="$attrs" style="position: relative;">
    <v-img
      :aspect-ratio="2"
      :lazy-src="item.image"
      :src="item.image"
      cover
      class="align-end"
      style="overflow: visible;"
    >
      <div
        class="d-flex px-2 justify-space-between"
        style="transform: translateY(50%); width: 100%;"
      >
        <div
          class="d-flex black white--text text-uppercase"
          style="border: 2px solid white !important;"
        >
          <div class="body-2 font-weight-bold">
            <div
              style="transform: rotate(-90deg); transform-origin: 50% 60%;"
              class="px-1 ml-1 py-2"
            >
              {{ item.date.month }}
            </div>
          </div>

          <div class="headline font-weight-bold px-4 py-2" style="border-left: 2px solid white;">
            {{ item.date.day }}
          </div>
        </div>

        <div class="d-flex black white--text" style="border: 2px solid white !important;">
          <v-img :src="item.avatar" width="48" height="48" />

          <div class="headline font-weight-bold px-4 py-2" style="border-left: 2px solid white;">
            {{ item.location }}
          </div>
        </div>
      </div>
    </v-img>

    <div class="mt-12 pa-4">
      <div class="display-2" v-text="item.title" />
      <div class="subtitle-1 mt-3" v-text="item.description" />
    </div>

    <div style="position: absolute; top: 0; right: 0;" class="d-flex">
      <div
        class="elevation-1 px-2 py-1 white--text"
        style="height: 100%; background-color: rgba(0,0,0,0.1)"
      >
        {{ item.type }}
      </div>
      <div class="elevation-1 pa-1 black" style="height: 100%;">
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
