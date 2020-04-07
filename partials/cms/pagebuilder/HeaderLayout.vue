<template>
  <v-row>
    <v-col cols="4" v-for="type in headerTypes" :key="type.value" @click="currentType = type.value">
      <v-sheet
        class="pa-12"
        :dark="type.value === currentType"
        :color="type.value === currentType ? 'primary' : undefined"
        elevation="1"
      >
        <div class="display-1 text-center">{{ type.title }}</div>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { HeaderType } from '@/types';

type Header = {
  value: HeaderType;
  title: string;
};

export default Vue.extend({
  props: {
    value: {
      type: String as () => HeaderType,
    },
  },

  data() {
    return {
      headerTypes: [
        {
          value: 'text-only',
          title: 'Text only',
        },
        {
          value: 'full-background',
          title: 'Full background',
        },
        {
          value: 'color-background',
          title: 'Color background',
        },
      ] as Header[],
    };
  },

  computed: {
    currentType: {
      get(): HeaderType {
        return this.value || 'text-only';
      },

      set(val: HeaderType) {
        this.$emit('input', val);
      },
    },
  },
});
</script>

<style></style>
