<template>
  <media-drawer :item="currentItem" v-model="showMedia" />
</template>

<script lang="ts">
import Vue from 'vue';
import MediaDrawer from '@/components/media-drawer';
import { ContentItem } from '@/types';

export default Vue.extend({
  components: {
    MediaDrawer,
  },

  computed: {
    currentItem(): ContentItem {
      return this.$store.getters['media/get:selected'];
    },

    showMedia: {
      get(): boolean {
        return !!this.currentItem && this.$store.getters['media/get:visibility'];
      },

      set(val: boolean) {
        this.$store.commit('media/set:visibility', val);
      },
    },
  },
});
</script>

<style></style>
