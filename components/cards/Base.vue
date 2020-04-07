<template>
  <v-sheet style="position: relative;" v-bind="$attrs">
    <slot />
    <div
      v-if="$slots['icon']"
      style="position: absolute; top: 0; right: 0;"
      class="black pa-1 elevation-1"
    >
      <slot name="icon" />
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
});
</script>
