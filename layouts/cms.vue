<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background.page }">
    <main-navigation-bar />
    <portal-bar />

    <v-content>
      <v-container>
        <v-row class="flex-nowrap">
          <cms-drawer />
          <v-sheet class="px-12 py-4 flex-grow-1" color="transparent">
            <nuxt />
          </v-sheet>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { PortalBar, MainNavigationBar, CmsDrawer } from '@/containers/navigation';

export default Vue.extend({
  name: 'App',

  components: {
    MainNavigationBar,
    PortalBar,
    CmsDrawer,
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
});
</script>
