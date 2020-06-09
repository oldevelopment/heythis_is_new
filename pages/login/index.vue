<template>
  <v-container>
    <div class="py-12 ml-12">
      <div class="display-2 font-weight-bold">Login</div>
      <div class="headline font-weight-normal mt-3">
        Use your social network to login to your heythis.is page.
      </div>
    </div>

    <social-login class="mt-12" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import SocialLogin from '@/components/social-login';

export default Vue.extend({
  layout: 'default',

  components: {
    SocialLogin,
  },
});
</script>

<style></style>
