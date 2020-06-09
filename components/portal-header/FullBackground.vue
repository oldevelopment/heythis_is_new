<template>
  <v-sheet class="portal-header--full-background" :elevation="flat ? 0 : 1">
    <v-img
      height="45vh"
      cover
      :src="image"
      class="text-center align-center"
      gradient="to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)"
    >
      <v-avatar size="256" class="elevation-">
        <v-img :src="avatar" />
      </v-avatar>

      <div class="white--text mt-5">
        <div class="font-weight-bold ml-n12">heythis.is</div>
        <div class="display-3 mt-2 font-weight-bold">{{ title }}</div>
      </div>
    </v-img>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portal, PortalSettings } from '@/types';

export default Vue.extend({
  components: {},

  props: {
    portal: {
      type: Object as () => Portal,
      default: null,
    },

    settings: {
      type: Object as () => PortalSettings,
      default: null,
    },

    flat: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    avatar(): string {
      return this.portal.profile.avatar;
    },

    image(): string {
      return `data:image/png;base64,${this.portal.profile.backgroundImage}`;
    },

    title(): string {
      if (!this.portal) {
        return '';
      }

      return (
        this.settings.header.title
        || this.portal.profile.title
        || `${this.portal.profile.firstName} ${this.portal.profile.lastName}`
      );
    },
  },
});
</script>
