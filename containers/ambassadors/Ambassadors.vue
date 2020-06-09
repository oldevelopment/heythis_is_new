<template>
  <basic-grid :items="users" :cols="12" :md="4" :lg="4" :xl="3" :sm="6">
    <template v-slot:item="{ item }">
      <ambassador-card :user="item" style="min-height: 100%;" />
    </template>
  </basic-grid>
</template>

<script lang="ts">
import Vue from 'vue';

import { UserProfile, Portal } from '@/types';
import { Basic as BasicGrid } from '@/components/grids';
import AmbassadorCard from '@/components/cards/Ambassador.vue';

export default Vue.extend({
  components: {
    BasicGrid,
    AmbassadorCard,
  },

  computed: {
    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },

    isPending(): boolean {
      return this.$store.getters['users/isPending'];
    },

    users(): UserProfile[] {
      return this.$store.state.users.users;
    },
  },
});
</script>

<style></style>
