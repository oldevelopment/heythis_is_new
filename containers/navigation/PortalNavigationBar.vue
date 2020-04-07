<template>
  <v-app-bar
    shrink-on-scroll
    v-if="portal"
    app
    fixed
    prominent
    color="black"
    dark
    flat
    class="v-toolbar--portal"
    clipped-right
    min-height="70"
  >
    <nuxt-link
      :to="portalLink"
      x-large
      exact
      style="font-size: 2.5em; color: #d59154; text-decoration: none;"
      class="font-weight-bold align-self-center text-"
      v-text="title"
    >
    </nuxt-link>

    <v-spacer></v-spacer>

    <v-btn
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="text-lowercase headline font-weight-bold align-self-center"
      text
      x-large
      v-text="link.title"
    >
    </v-btn>

    <auth-bar />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portal } from '@/types';
import AuthBar from './AuthBar.vue';

export default Vue.extend({
  components: {
    AuthBar,
  },

  data() {
    return {};
  },

  computed: {
    links(): any[] {
      return [
        {
          to: this.pageLink('ambassadors'),
          title: 'Ambassadors',
        },

        {
          to: this.pageLink('updates'),
          title: 'Updates',
        },

        {
          to: this.pageLink('videos'),
          title: 'Videos',
        },

        {
          to: this.pageLink('events'),
          title: 'Events',
        },

        {
          to: this.pageLink('creatives'),
          title: 'Creatives',
        },

        {
          to: this.pageLink('places'),
          title: 'Places',
        },
      ];
    },

    portalLink(): string {
      return `/p/${this.portal.site}`;
    },

    pageLink() {
      return (page: string): string => `${this.portalLink}/${page}`;
    },

    signedIn(): boolean {
      return this.$store.getters['account/isAuthenticated'];
    },

    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },

    title(): string {
      return this.portal.site;
    },
  },

  methods: {
    signIn() {
      this.$store.dispatch('account/signIn');
    },

    signOut() {
      this.$store.dispatch('account/signOut');
    },
  },
});
</script>

<style lang="scss">
.v-toolbar--portal .v-toolbar__content {
  min-height: 70px;
}

.v-toolbar--portal .v-toolbar--auth {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
}
</style>
