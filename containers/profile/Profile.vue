<template>
  <profile v-if="profile" :profile="profile" />
</template>

<script lang="ts">
import Vue from 'vue';

import Profile from '@/components/profile';
import { SocialUser } from '@/types';

export default Vue.extend({
  components: {
    Profile,
  },

  computed: {
    profile(): SocialUser[] {
      return this.$store.state.account.user;
    }
  },
});
</script>
