<template>
  <div>
    <channels v-model="channel" :channels="channels" />
    <basic-grid class="mt-12" :items="filteredItems" @select="$emit('select', $event)">
      <template v-slot:item="{ item }">
        <content-card
          :item="item"
          style="height: 100%; min-height: 100%;"
          elevation="1"
          aspect-ratio="1"
        />
      </template>
    </basic-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Channels from './Channels.vue';
import { ContentItem, ContentChannel } from '@/types';

import BasicGrid from '@/components/grids/Basic.vue';
import ContentCard from '@/components/cards/Content.vue';

export default Vue.extend({
  props: {
    items: {
      type: Array as () => ContentItem[],
      default: [],
    },
  },

  data() {
    return {
      channel: 'Any' as ContentChannel,
    };
  },

  components: {
    Channels,
    BasicGrid,
    ContentCard,
  },

  computed: {
    filteredItems(): ContentItem[] {
      return this.items.filter((item) => this.channel === 'Any' || item.channel === this.channel);
    },

    channels(): ContentChannel[] {
      return this.items.map((item) => item.channel);
    },
  },
});
</script>
