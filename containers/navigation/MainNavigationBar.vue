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
            <v-btn to="/signup" class="text-capitalize" text>Register</v-btn>
            <v-btn to="/login" class="text-capitalize" text>Login</v-btn>
          </template>

          <template v-else>
            <span v-text="user.name || user.email" class="mr-3 title" />
            <v-menu min-width="200">
              <template v-slot:activator="{ on }">
                <v-avatar size="36" v-on="on" @click.stop="">
                  <v-img v-if="user.picture" :src="user.picture" />
                  <v-icon v-else size="36">mdi-face-profile</v-icon>
                </v-avatar>
              </template>
              <v-list subheader>
                <v-list-item link to="/account">
                  <v-list-item-icon>
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Mijn profiel</v-list-item-title>
                </v-list-item>
                <v-divider />
                <a href="/auth/logout" style="text-decoration: none">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-logout-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                      Uitloggen
                    </v-list-item-title>
                  </v-list-item>
                </a>
              </v-list>
            </v-menu>
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
});
</script>

<style></style>
