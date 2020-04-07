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

          <!-- <template v-if="!signedIn">
          <v-btn @click="signIn" class="text-capitalize" text>Register</v-btn>
          <v-btn @click="signIn" class="text-capitalize" text>Login</v-btn>
        </template>

        <template v-else>
          <v-btn to="/isaplan" class="text-capitalize" text>My portal</v-btn>
          <v-btn @click="signOut" class="text-capitalize" text>Logout</v-btn>
        </template> -->
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },

  computed: {
    signedIn(): boolean {
      return this.$store.getters['account/isAuthenticated'];
    },
  },

  methods: {
    signIn() {
      this.$store.dispatch('account/signIn');
    },

    signOut() {
      this.$store.dispatch('account/signOut');
    },
  },
});
</script>

<style></style>
