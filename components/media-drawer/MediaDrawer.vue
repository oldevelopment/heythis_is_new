<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    right
    app
    width="100%"
    temporary
    fixed
    style="max-width: 40vw;"
  >
    <template v-if="item">
      <div class="d-flex pa-4">
        <span class="title" v-text="date" />
      </div>

      <div class="px-4">
        <content-viewer :item="item" />
      </div>

      <div class="pa-4">
        <div class="title" v-if="item.title" v-text="item.title" />
        <div
          class="body-1 mt-3"
          v-if="item.description && item.description !== item.title"
          v-text="item.description"
        />
      </div>

      <div class="pa-4 d-flex justify-end align-center">
        <span class="title mr-4" v-html="item.site"></span>
        <v-avatar size="64" class="elevation-1"><v-img :src="item.avatar"/></v-avatar>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentItem, Nullable } from '@/types';
import ContentViewer from '@/components/content-viewer';
import moment from 'moment';

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false,
    },

    item: {
      type: Object as () => Nullable<ContentItem>,
      default: null,
    },
  },

  components: {
    ContentViewer,
  },

  computed: {
    date(): string {
      return moment(this.item!.date).calendar();
    },
  },
});
</script>

<style></style>
