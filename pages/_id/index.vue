<template>
  <v-container v-if="portal">
    <v-row justify="center">
      <v-col cols="10">
        <portal-header :portal="portal" :settings="settings" />
        <keywords :items="portal.profile.keywords" class="text-center mt-10" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <div
          class="display-1 text-center mt-5"
          style="line-height: 1.5em;"
          v-text="portal.profile.description"
        ></div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <component class="mt-12" :is="pageType" :portal="portal" :settings="settings" />
        <div class="mt-12 text-center">
          <v-btn outlined x-large :to="`/${portal.site}/cms`">Edit</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import { Premium as PremiumPage, Basic as BasicPage } from '@/partials/page';
import Keywords from '@/components/keywords';
import PortalHeader from '@/components/portal-header';
import { Portal, PortalSettings } from '@/types';

export default Vue.extend({
  layout: 'page',

  components: {
    PortalHeader,
    Keywords,
  },

  computed: {
    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },

    settings(): PortalSettings {
      return this.$store.getters['portalSettings/get:current'];
    },

    pageType(): VueConstructor {
      switch (this.portal?.profile.type) {
        case 'premium':
          return PremiumPage;
        default:
          return BasicPage;
      }
    },
  },

  async fetch({ store, params }) {
    await store.dispatch('portalSettings/fetch:settings', params.id);
    await store.dispatch('portals/fetch:portal', params.id);
  },
});
</script>

<style></style>
