<template>
  <div class="hti-content-block mt-12 py-12 text-center" :class="{ white: light, 'px-12': light }">
    <div class="display-1 font-weight-bold mb-7">- {{ title }} -</div>
    <div class="hti-content-block__content">
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: String,
    light: Boolean,
  },
});
</script>

<style>
.hti-content-block__content > *:not(:first-child) {
  margin-top: 28px;
}
</style>
