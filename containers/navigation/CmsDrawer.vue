<template>
  <v-card color="transparent" class="transparent" elevation="0" v-if="portal">
    <v-navigation-drawer floating permanent left color="transparent" width="300">
      <v-list>
        <template v-for="item in links">
          <v-list-item v-if="!item.items" :key="item.title" link :to="item.to" exact>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else :key="item.title" no-action :prepend-icon="item.icon">
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>
            <v-list-item v-for="subitem in item.items" :key="subitem.title" :to="subitem.to">
              <v-list-item-content>
                <v-list-item-title>{{ subitem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portal } from '@/types';

export default Vue.extend({
  computed: {
    cmsLink(): string {
      return `/${this.portal.site}/cms`;
    },

    portal(): Portal {
      return this.$store.getters['portals/get:current'];
    },

    links(): any[] {
      return [
        { title: 'Preview', icon: 'mdi-view-dashboard', to: `/${this.portal.site}` },
        {
          title: 'Page builder',
          icon: 'mdi-page-layout-header-footer',
          items: [
            {
              title: 'Header',
              to: `${this.cmsLink}/pagebuilder/header`,
            },
            {
              title: 'Grid & Posts',
              to: `${this.cmsLink}/pagebuilder/grid`,
            },
            {
              title: 'Footer',
              to: `${this.cmsLink}/pagebuilder/footer`,
            },
          ],
          to: `${this.cmsLink}/pagebuilder`,
        },
        { title: 'Profile', icon: 'mdi-face-profile', to: `${this.cmsLink}/profile` },
        {
          title: 'Social networks',
          icon: 'mdi-transit-connection-variant',
          to: `${this.cmsLink}/socialnetworks`,
        },
        {
          title: 'Contenthub',
          icon: 'mdi-play-circle',
          to: `${this.cmsLink}/content`,
        },
        {
          title: 'Portals',
          icon: 'mdi-home-heart',
          to: `${this.cmsLink}/portals`,
        },
        {
          title: 'SEO',
          icon: 'mdi-cloud-search',
          to: `${this.cmsLink}/seo`,
        },
        {
          title: 'Stats',
          icon: 'mdi-chart-areaspline',
          to: `${this.cmsLink}/seo`,
        },
      ];
    },
  },
});
</script>

<style></style>
