<template>
  <v-sheet class="portal-header--color-background" :elevation="flat ? 0 : 1" color="#eb5286">
    <v-row no-gutters>
      <v-col cols="6" offset="6">
        <v-img
          height="50vh"
          max-height="650"
          cover
          :src="image"
          gradient="to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
        />
      </v-col>
    </v-row>

    <div class="portal-header__content white--text pa-4">
      <div class="display-3 ml-n8 my-4 font-weight-bold">{{ title }}</div>
      <div>
        <span class="headline font-weight-bold" v-text="firstWord"></span>
        <span class="ml-1" v-text="description"></span>
      </div>
    </div>
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

    firstWord(): string {
      return this.portal.profile.description
        .split(' ')
        .slice(0, 3)
        .join(' ');
    },

    description(): string {
      return this.portal.profile.description
        .split(' ')
        .slice(3)
        .join(' ');
    },
  },
});
</script>

<style lang="scss" scoped>
.v-sheet {
  position: relative;
}

.portal-header {
  &__content {
    $offset: 15%;

    position: absolute;
    left: 50%;
    top: 50%;
    width: 60%;
    transform: translate(-50% - $offset, -50%);
    text-align: center;

    // &:before {
    //   content: '';
    //   position: absolute;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
    //   width: 50% - $offset;
    //   z-index: -1;
    //   background-color: rgba(#000, 0.15);
    //   border-top-right-radius: 4px;
    //   border-bottom-right-radius: 4px;
    // }
  }
}
</style>
