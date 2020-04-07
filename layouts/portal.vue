<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background.portal }">
    <portal-navigation-bar />
    <v-content>
      <nuxt />
    </v-content>
    <media-drawer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { PortalNavigationBar } from '@/containers/navigation';
import MediaDrawer from '@/containers/media-drawer';

export default Vue.extend({
  name: 'App',

  components: {
    PortalNavigationBar,
    MediaDrawer,
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
});
</script>
