<template>
  <component
    :is="headerType"
    :portal="portal"
    :flat="flat"
    :settings="settings"
    class="portal-header"
  />
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import TextOnly from './TextOnly.vue';
import FullBackground from './FullBackground.vue';
import ColorBackground from './ColorBackground.vue';
import { Nullable, Portal, PortalSettings } from '@/types';

export default Vue.extend({
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
    headerType(): Nullable<VueConstructor> {
      if (!this.portal) {
        return null;
      }

      switch (this.settings?.header.type) {
        case 'text-only':
          return TextOnly;
        case 'full-background':
          return FullBackground;
        case 'color-background':
          return ColorBackground;
        default:
          return TextOnly;
      }
    },
  },
});
</script>

<style></style>
