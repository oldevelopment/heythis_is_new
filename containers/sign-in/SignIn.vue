<template>
  <v-form autocomplete="on" ref="form" v-model="formValid">
    <v-row>
      <v-col cols="12">
          <v-text-field
          v-model="user.email"
          :rules="rules.email"
          type="email"
          label="Email"
          outlined
          prepend-inner-icon="mdi-at" />

          <v-text-field
          v-model="user.password"
          :rules="rules.password"
          label="Password"
          type="password"
          auto
          outlined
          prepend-inner-icon="mdi-lock" />
      </v-col>
    </v-row>

    <v-alert type="error" v-if="error">
      <ul>
        <li v-for="message in errorMessages" :key="message" v-text="message">
        </li>
      </ul>
    </v-alert>

    <v-row class="justify-center">
      <v-col cols="12" class="text-center">
        <v-btn
        x-large
        color="primary"
        :loading="isPending"
        @click="signIn"
        :disabled="!formValid || isPending">Sign in</v-btn>
      </v-col>
    </v-row>

  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Nullable, SignInUser } from '@/types';
import { AxiosError } from 'axios';

export default Vue.extend({
  props: {
    user: {
      type: Object as () => SignInUser,
      default: (): SignInUser => ({
        email: '', password: ''
      })
    },
  },

  data() {
    return {
      formValid: false,
      isPending: false,
      error: null as Nullable<AxiosError<string[]>>
    };
  },

  computed: {
    rules() {
      return {
        email: [
          (v: string) => !!v || 'Email address is required',
          (v: string) => /.+@.+/.test(v) || 'Must be a valid email address',
        ],
        password: [
          (v: string) => (!!v && v.length >= 8) || 'Password must contain at least 8 characters',
        ],
      };
    },

    errorMessages(): string[] {
      return this.error?.response?.data ?? [];
    }
  },

  methods: {
    async signIn() {
      const form = this.$refs.form as any;

      if (!form.validate()) return;

      try {
        this.error = null;
        this.isPending = true;
        await this.$store.dispatch('account/signIn', this.user);
        await this.$router.replace('/account');
        window.location.reload();
      } catch (e) {
        this.error = e;
      } finally {
        this.isPending = false;
      }
    }
  }
});
</script>
