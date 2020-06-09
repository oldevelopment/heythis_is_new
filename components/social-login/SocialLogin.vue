<template>
  <div class="d-flex">
    <a
      v-for="channel in channels"
      :key="channel.name"
      class="ml-3"
      :href="channel.loginUrl"
      style="text-decoration: none"
    >
      <v-btn
        dark
        x-large
        :min-width="$vuetify.breakpoint.mdAndUp ? 100 : 80"
        :value="channel.value"
        :color="channel.color"
      >
        <v-icon :left="$vuetify.breakpoint.mdAndUp">{{ channel.icon }}</v-icon>
        <span v-show="$vuetify.breakpoint.mdAndUp">{{ channel.name }}</span>
      </v-btn>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Channel } from '@/types';

type ChannelLogin = Channel & { loginUrl: string };

const channels: ChannelLogin[] = [
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    color: '#29487d',
    value: 'Facebook',
    loginUrl: '/auth/facebook',
  },
  {
    name: 'Instagram',
    icon: 'mdi-instagram',
    color: '#FB9492',
    value: 'Instagram',
    loginUrl: '/auth/instagram',
  },
  {
    name: 'Youtube',
    icon: 'mdi-youtube',
    color: '#FF0000',
    value: 'YouTube',
    loginUrl: '/auth/google',
  },
  {
    name: 'Twitter',
    icon: 'mdi-twitter',
    color: '#1DA1F2',
    value: 'Twitter',
    loginUrl: '/auth/twitter',
  },
];

export default Vue.extend({
  data() {
    return {
      channels,
    };
  },
});
</script>
