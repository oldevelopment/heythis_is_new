<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background.page }">
    <main-navigation-bar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { MainNavigationBar } from '@/containers/navigation';

export default Vue.extend({
  name: 'App',

  components: {
    MainNavigationBar,
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
});
</script>
