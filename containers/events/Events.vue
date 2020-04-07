<template>
  <v-row justify="center">
    <v-col cols="12" :xl="events.length > 1 ? 6 : 12" v-for="event in events" :key="event.title">
      <event-card :item="event" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import EventCard from '@/components/cards/Event.vue';
import { EventItem } from '@/types';

export default Vue.extend({
  components: {
    EventCard,
  },

  data() {
    return {
      events: [
        {
          title: 'EP Release Party | Delicious',
          location: 'Paard van Troje',
          image: 'https://pilot-2020.netlify.com/images/artist/pink-oculus-event-30-jul.jpg',
          description:
            'Deze alternatieve soul/hiphop-artiest verrijkt Nederland met fantastische hiphop, jazz en funk. Deze avond presenteert Pink Oculus haar EP ‘Delicious’, begeleid door Badjekkah. Hierop laat ze haar diverse sound horen: van de verleidelijke, bass heavy single ‘Delicious’ tot haar zachtere kant op ‘Birds’. Lees meer.',
          date: {
            day: 31,
            month: 'jun',
            year: 19,
          },
        },
      ] as EventItem[],
    };
  },
});
</script>

<style></style>
