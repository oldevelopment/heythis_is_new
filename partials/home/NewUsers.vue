<template>
  <v-row v-if="isPending">
    <v-col cols="6" sm="4" md="3" xl="2" v-for="user in [1, 2, 3, 4, 5, 6, 7, 8]" :key="user">
      <user-card-skeleton />
    </v-col>
  </v-row>
  <v-row v-else justify="center">
    <v-col cols="6" sm="4" md="3" xl="2" v-for="user in users" :key="user.site">
      <user-card :user="user" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import UserCard from '@/components/cards/User.vue';
import UserCardSkeleton from '@/components/cards/UserSkeleton.vue';

export default Vue.extend({
  name: 'NewUsers',

  data() {
    return {};
  },

  components: {
    UserCard,
    UserCardSkeleton,
  },

  computed: {
    isPending(): boolean {
      return this.$store.getters['users/isPending'];
    },

    users() {
      return this.$store.state.users.users;
    },
  },
});
</script>
