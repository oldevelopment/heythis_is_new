<template>
  <div >
    <v-btn @click="getContent" >Get content</v-btn>

    <pre v-html="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const GET_YOUTUBE_CONTENT = require('@/graphql/GetYoutubeContent.gql');

export default Vue.extend({
  data() {
    return {
      content: []
    };
  },

  methods: {
    async getContent() {
      try {
        const videos = await this.$apollo.query({
          query: GET_YOUTUBE_CONTENT,
          variables: { id: this.$store.state.account.user._id }
        });

        this.content = videos.data.getYoutubeContents;

        console.log(videos.data.getYoutubeContents);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
</script>
