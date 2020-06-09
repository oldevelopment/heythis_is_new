<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-2 font-weight-bold">Account</div>
    </div>

    <v-row>
      <v-col cols="4">
        <profile class="mt-12" />
      </v-col>
    </v-row>

    <div class="headline font-weight-normal mt-3">
        Use your social network to connect to your heythis.is page.
      </div>
    <social-login class="mt-12" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import SocialLogin from '@/containers/social-login';
import Profile from '@/containers/profile';

export default Vue.extend({
  layout: 'default',

  components: {
    SocialLogin,
    Profile,
  },
});
</script>
