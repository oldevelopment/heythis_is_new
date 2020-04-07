<template>
  <v-row>
    <v-col cols="6" sm="4" v-for="(event, index) in events" :key="index">
      <update-card :item="event" class="elevation-1" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import UpdateCard from '@/components/cards/PortalUpdate.vue';
import { EventItem } from '@/types';

export default Vue.extend({
  components: {
    UpdateCard,
  },

  data() {
    return {
      events: [
        {
          title: 'Showcase...',
          location: 'Stage Z',
          type: 'music',
          channel: 'Instagram',
          image: 'https://i.picsum.photos/id/106/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/600?img=60',
          description:
            'Wraith talk. To succeed you must believe. When you believe, you will succeed. Another one. They will try to close the door on you, just open it. They never said winning was easy. Some people can’t handle success, I can. Cloth talk. Celebrate success...',
          date: {
            date: '28-09-2019',
            day: 29,
            month: 'aug',
            year: 19,
          },
        },

        {
          title: 'Update...',
          location: 'Theater Y',
          channel: 'Twitter',
          type: 'music',
          image: 'https://i.picsum.photos/id/301/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/600?img=60',
          description:
            'Wraith talk. To succeed you must believe. When you believe, you will succeed. Another one. They will try to close the door on you, just open it. They never said winning was easy. Some people can’t handle success, I can. Cloth talk. Celebrate success...',
          date: {
            date: '16-10-2019',
            day: 29,
            month: 'aug',
            year: 19,
          },
        },

        {
          title: 'Show case...',
          location: 'Venue A',
          channel: 'Facebook',
          type: 'music',
          image: 'https://i.picsum.photos/id/401/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/600?img=60',
          description:
            'Wraith talk. To succeed you must believe. When you believe, you will succeed. Another one. They will try to close the door on you, just open it. They never said winning was easy. Some people can’t handle success, I can. Cloth talk. Celebrate success...',
          date: {
            date: '15-09-2019',
            day: 25,
            month: 'jun',
            year: 19,
          },
        },

        {
          title: 'Showcase...',
          location: 'Stage X',
          channel: 'Facebook',
          type: 'music',
          image: 'https://i.picsum.photos/id/201/2621/1747.jpg',
          avatar: 'https://i.pravatar.cc/600?img=60',
          description:
            'Wraith talk. To succeed you must believe. When you believe, you will succeed. Another one. They will try to close the door on you, just open it. They never said winning was easy. Some people can’t handle success, I can. Cloth talk. Celebrate success...',
          date: {
            date: '06-10-2019',
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
