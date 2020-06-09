<template>
  <div>
    <no-ssr>
      <v-chip v-for="tag in items" :key="tag" label v-text="tag" />
    </no-ssr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    items: {
      type: Array as () => string[],
      default: [],
    },
  },
});
</script>

<style lang="scss" scoped>
.v-chip {
  & + & {
    margin-left: 8px;
  }
}
</style>
