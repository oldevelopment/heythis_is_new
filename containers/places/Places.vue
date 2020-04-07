<template>
  <basic-grid :items="users" :cols="12" :md="6" :lg="6" :xl="6" :sm="6">
    <template v-slot:item="{ item }">
      <place-card :user="item" style="min-height: 100%;" />
    </template>
  </basic-grid>
</template>

<script lang="ts">
import Vue from 'vue';

import { UserProfile, Portal } from '@/types';
import { Basic as BasicGrid } from '@/components/grids';
import PlaceCard from '@/components/cards/Place.vue';

export default Vue.extend({
  components: {
    BasicGrid,
    PlaceCard,
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
