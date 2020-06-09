<template>
  <v-scale-transition group class="row">
    <v-col
      :cols="cols"
      :sm="sm"
      :md="md"
      :lg="lg"
      :xl="xl"
      v-for="(item, index) in items"
      :key="item.id || index"
      @click="$emit('select', item)"
    >
      <slot name="item" v-bind="{ item, index }" />
    </v-col>
  </v-scale-transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentItem } from '@/types';

export default Vue.extend({
  props: {
    items: {
      type: Array as () => ContentItem[],
      default: [],
    },

    cols: {
      type: Number,
      default: 6,
    },

    sm: {
      type: Number,
      default: 4,
    },

    md: {
      type: Number,
      default: 4,
    },

    lg: {
      type: Number,
      default: 3,
    },

    xl: {
      type: Number,
      default: 3,
    },
  },
});
</script>

<style></style>
