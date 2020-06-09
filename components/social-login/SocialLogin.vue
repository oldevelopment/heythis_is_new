<template>
  <div class="d-flex">
    <template v-for="channel in availableChannels">
    <a
      v-if="!channel.connected"
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
    <v-btn
        v-else
        :key="channel.name"
        class="ml-3"
        x-large
        :min-width="$vuetify.breakpoint.mdAndUp ? 100 : 80"
        :value="channel.value"
        :color="channel.color"
        disabled
      >
        <v-icon :left="$vuetify.breakpoint.mdAndUp">{{ channel.icon }}</v-icon>
        <span v-show="$vuetify.breakpoint.mdAndUp">{{ channel.name }}</span>
      </v-btn>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Channel, OAuthToken, OAuthTokenKind } from '@/types';

type ChannelLogin = Channel & { loginUrl: string; connected?: boolean; kind: OAuthTokenKind };

const channels: ChannelLogin[] = [
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    color: '#29487d',
    value: 'Facebook',
    loginUrl: '/auth/facebook',
    kind: 'facebook'
  },
  {
    name: 'Instagram',
    icon: 'mdi-instagram',
    color: '#FB9492',
    value: 'Instagram',
    loginUrl: '/auth/instagram',
    kind: 'instagram'
  },
  {
    name: 'Youtube',
    icon: 'mdi-youtube',
    color: '#FF0000',
    value: 'YouTube',
    loginUrl: '/auth/google',
    kind: 'google'
  },
  {
    name: 'Twitter',
    icon: 'mdi-twitter',
    color: '#1DA1F2',
    value: 'Twitter',
    loginUrl: '/auth/twitter',
    kind: 'twitter'
  },
];

export default Vue.extend({
  props: {
    tokens: {
      type: Array as () => OAuthToken[],
      default: () => []
    },
    channels: {
      type: Array as () => OAuthTokenKind[],
      default: () => ['google', 'facebook', 'instagram', 'twitter']
    }
  },
  data() {
    return {};
  },

  computed: {
    availableChannels(): ChannelLogin[] {
      return channels.filter((channel) => this.channels.includes(channel.kind)).map((channel) =>
        ({ ...channel, connected: this.tokens.some((token) => token.kind === channel.kind) }));
    }
  }
});
</script>
