<template>
  <social-login :tokens="tokens" :channels="['facebook', 'google', 'instagram']" />
</template>

<script lang="ts">
import Vue from 'vue';

import SocialLogin from '@/components/social-login';
import { OAuthToken } from '@/types';

export default Vue.extend({
  components: {
    SocialLogin
  },

  computed: {
    tokens(): OAuthToken[] {
      return this.$store.state.account.user?.tokens ?? [];
    }
  }
});
</script>
