<template>
  <div>
    <div class="display-2">
      Header
    </div>

    <div class="display-1 mt-12">
      Layout
    </div>
    <header-layout class="mt-3" v-model="headerType" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portal, HeaderType, PortalSettings } from '@/types';

import HeaderLayout from '@/partials/cms/pagebuilder/HeaderLayout.vue';

export default Vue.extend({
  layout: 'cms',

  components: {
    HeaderLayout,
  },

  computed: {
    headerType: {
      get(): HeaderType {
        return this.settings.header.type;
      },

      set(val: HeaderType) {
        const header = { ...this.settings.header, type: val };

        this.$store.commit('portalSettings/update', {
          name: this.portal.site,
          settings: { ...this.settings, header },
        });
      },
    },

    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },

    settings(): PortalSettings {
      return this.$store.getters['portalSettings/get:current'];
    },
  },

  async fetch({ store, params }) {
    await store.dispatch('portalSettings/fetch:settings', params.id);
    await store.dispatch('portals/fetch:portal', params.id);
  },
});
</script>

<style></style>
