<template>
  <v-row justify="center">
    <v-col cols="6" sm="4" v-for="(event, index) in events" :key="index">
      <event-card :item="event" class="elevation-1" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import EventCard from '@/components/cards/PortalEvent.vue';
import { EventItem } from '@/types';

export default Vue.extend({
  components: {
    EventCard,
  },

  data() {
    return {
      events: [
        {
          title: 'Music...',
          location: 'Stage X',
          type: 'music',
          channel: 'Facebook',
          image: 'https://i.picsum.photos/id/1082/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/150?img=3',
          description:
            'Lorem Khaled Ipsum is a major key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. It’s on you how you want to live your life. Everyone has a choice. I pick my choice,...',
          date: {
            day: 29,
            month: 'aug',
            year: 19,
          },
        },

        {
          title: 'Arts Event',
          location: 'Museum X',
          channel: 'Facebook',
          type: 'arts',
          image: 'https://i.picsum.photos/id/101/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/150?img=3',
          description:
            'Lorem Khaled Ipsum is a major key to success. You see the hedges, how I got it shaped up? Everyone has a choice. I pick my choice, squeaky clean. Let’s see what Chef Dee got that they don’t want us to eat. The key is to enjoy life, because they don’t want...',
          date: {
            day: 29,
            month: 'aug',
            year: 19,
          },
        },

        {
          title: 'Fashion...',
          location: 'Gallery X',
          channel: 'Facebook',
          type: 'fashion',
          image: 'https://i.picsum.photos/id/101/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/150?img=3',
          description:
            'Lorem Khaled Ipsum is a major key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. It’s on you how you want to live your life. Everyone has a choice. I pick my choice,...',
          date: {
            day: 25,
            month: 'jun',
            year: 19,
          },
        },

        {
          title: 'Arts Event',
          location: 'Stage X',
          channel: 'Facebook',
          type: 'music',
          image: 'https://i.picsum.photos/id/1079/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/150?img=3',
          description:
            'Everyone has a choice. I pick my choice, squeaky clean. Let’s see what Chef Dee got that they don’t want us to eat. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to...',
          date: {
            day: 24,
            month: 'oct',
            year: 19,
          },
        },

        {
          title: 'Theater...',
          location: 'Theater 1',
          channel: 'Facebook',
          type: 'performing arts',
          image: 'https://i.picsum.photos/id/1027/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/150?img=3',
          description:
            'Lorem Khaled Ipsum is a major key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. It’s on you how you want to live your life. Everyone has a choice. I pick my choice,...',
          date: {
            day: 24,
            month: 'oct',
            year: 19,
          },
        },

        {
          title: 'Dance...',
          location: 'Theater 2',
          channel: 'Facebook',
          type: 'dance',
          image: 'https://i.picsum.photos/id/1025/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/150?img=3',
          description:
            'Lorem Khaled Ipsum is a major key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. It’s on you how you want to live your life. Everyone has a choice. I pick my choice,...',
          date: {
            day: 24,
            month: 'oct',
            year: 19,
          },
        },
      ] as EventItem[],
    };
  },
});
</script>

<style></style>
