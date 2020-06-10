<template>
  <v-container>
    <div class="pt-12 display-2 font-weight-bold text-center">
      Sign in
    </div>

    <v-row class="justify-center">
      <v-col cols="4">
        <sign-in class="mt-8" />
      </v-col>
    </v-row>

    <div class="headline font-weight-normal mt-3 text-center">
        Or use your social network to sign in with heythis.is.
      </div>
    <social-login class="mt-12 justify-center" :channels="['facebook', 'google']" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import SocialLogin from '@/components/social-login';
import SignIn from '@/containers/sign-in';

export default Vue.extend({
  layout: 'default',

  components: {
    SocialLogin,
    SignIn,
  },
});
</script>
