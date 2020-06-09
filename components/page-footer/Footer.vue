<template>
  <v-footer fixed style="z-index: -1;" height="350" color="#edf2f7">
    <v-row justify="space-between" class="px-12">
      <v-col>
        <div class="display-1 font-weight-bold mb-3">Bezoekadres</div>
        <div class="body-1">Buitenom 229</div>
        <div class="body-1">2512XD</div>
        <div class="body-1">Den Haag</div>
        <div class="body-1">Zuid-Holland</div>
      </v-col>
      <v-col>
        <div class="display-1 font-weight-bold mb-3">Instagram</div>
      </v-col>
      <v-col>
        <div class="display-1 font-weight-bold mb-3">Volg ons</div>
        <div>
          <v-btn icon text><v-icon left>mdi-facebook</v-icon></v-btn>
          <v-btn icon text><v-icon left>mdi-twitter</v-icon></v-btn>
          <v-btn icon text><v-icon left>mdi-linkedin</v-icon></v-btn>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style></style>
