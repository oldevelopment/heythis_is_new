<template>
  <v-app-bar color="#f2f7fa" flat class="flex-grow-0" clipped-right>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="10" class="d-flex align-center">
          <router-link to="/">
            <v-img
              alt="heythis.is Logo"
              class="mr-2"
              contain
              src="/images/img-logo__menu.png"
              width="88"
            />
          </router-link>

          <v-btn to="/netwerk" class="text-lowercase" text>network</v-btn>
          <v-btn to="/videowall" class="text-lowercase" text>videowall</v-btn>
          <v-btn to="/readmore" class="text-lowercase" text>read more</v-btn>

          <v-spacer></v-spacer>

          <template v-if="!signedIn">
            <a href="/auth/google"><v-btn class="text-capitalize" text>Register</v-btn></a>
            <a href="/auth/google"><v-btn class="text-capitalize" text>Login</v-btn></a>
          </template>

          <template v-else>
            <span v-text="user.profile.name" class="mr-3 title" />
            <a href="/auth/logout">
              <v-avatar size="36">
                <v-img :src="user.profile.picture" />
              </v-avatar>
            </a>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { SocialUser } from '@/types';

export default Vue.extend({
  data() {
    return {};
  },

  computed: {
    signedIn(): boolean {
      return this.$store.getters['account/isAuthenticated'];
    },

    user(): SocialUser {
      return this.$store.state.account.user;
    },
  },

  mounted() {
    console.log(this.$store.state.account);
  },

  methods: {
    signIn() {
      // this.$store.dispatch('account/signIn');
    },

    async signOut() {
      // await this.$store.dispatch('account/signOut');
      await this.$router.push('/auth/logout');
    },
  },
});
</script>

<style></style>
