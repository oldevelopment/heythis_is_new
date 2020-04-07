<template>
  <div class="upcoming">
    <div class="text-right py-3">
      <v-chip label>upcoming</v-chip>
    </div>
    <div class="upcoming__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
