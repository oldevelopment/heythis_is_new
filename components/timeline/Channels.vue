<template>
  <div class="text-center">
    <v-btn-toggle :value="value" @change="$emit('input', $event)" group mandatory>
      <v-btn
        :min-width="$vuetify.breakpoint.mdAndUp ? 100 : 80"
        v-for="channel in availableChannels"
        :key="channel.name"
        :value="channel.value"
        :color="channel.color"
        text
      >
        <v-icon :left="$vuetify.breakpoint.mdAndUp">{{ channel.icon }}</v-icon>
        <span v-show="$vuetify.breakpoint.mdAndUp">{{ channel.name }}</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Channel, ContentChannel } from '@/types';

const channels: Channel[] = [
  {
    name: 'All',
    icon: 'mdi-cube',
    color: '#AF3AFF',
    value: 'Any',
  },
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    color: '#29487d',
    value: 'Facebook',
  },
  {
    name: 'Instagram',
    icon: 'mdi-instagram',
    color: '#FB9492',
    value: 'Instagram',
  },
  {
    name: 'Youtube',
    icon: 'mdi-youtube',
    color: '#FF0000',
    value: 'YouTube',
  },
  {
    name: 'Twitter',
    icon: 'mdi-twitter',
    color: '#1DA1F2',
    value: 'Twitter',
  },
];

export default Vue.extend({
  props: {
    value: {
      type: String as () => ContentChannel,
      default: 'Any',
    },

    channels: {
      type: Array as () => ContentChannel[],
      default: [],
    },
  },

  computed: {
    availableChannels(): Channel[] {
      return !this.channels.length
        ? channels
        : channels
            .filter((channel) => channel.value === 'Any' || this.channels.includes(channel.value))
            .filter((channel, index, array) => array.length > 2 || channel.value !== 'Any');
    },
  },
});
</script>

<style></style>
