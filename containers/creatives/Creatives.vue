<template>
  <basic-grid :items="users" cols="12" :md="3" :lg="3" :xl="3" :sm="6">
    <template v-slot:item="{ item }">
      <creative-card :user="item" style="min-height: 100%;" />
    </template>
  </basic-grid>
</template>

<script lang="ts">
import Vue from 'vue';

import { UserProfile, Portal } from '@/types';
import { Basic as BasicGrid } from '@/components/grids';
import CreativeCard from '@/components/cards/Creative.vue';

export default Vue.extend({
  components: {
    BasicGrid,
    CreativeCard,
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
