<template>
  <v-form>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-avatar size="64">
          <v-img :src="profile.profile.picture" />
        </v-avatar>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">

        <v-text-field
          :value="profile.profile.name"
          label="Naam"
          outlined
          readonly
          prepend-inner-icon="mdi-account" />

          <v-text-field
          :value="profile.email"
          label="Email"
          outlined
          disabled
          prepend-inner-icon="mdi-at" />
      </v-col>
    </v-row>

  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { SocialUser } from '@/types';

export default Vue.extend({
  props: {
    profile: Object as () => SocialUser
  }
});
</script>
