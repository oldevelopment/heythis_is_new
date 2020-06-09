<template>
  <v-app
    :style="{ background: $vuetify.theme.themes[theme].background.page }"
    style="margin-bottom: 350px;"
  >
    <main-navigation-bar />
    <portal-bar />
    <v-content class="elevation-20">
      <nuxt />
    </v-content>
    <media-drawer />
    <page-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { PortalBar, MainNavigationBar } from '@/containers/navigation';
import MediaDrawer from '@/containers/media-drawer';
import PageFooter from '@/components/page-footer';

export default Vue.extend({
  name: 'App',

  components: {
    PageFooter,
    MainNavigationBar,
    MediaDrawer,
    PortalBar,
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
});
</script>
