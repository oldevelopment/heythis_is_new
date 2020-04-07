<template>
  <youtube
    player-width="100%"
    v-if="item.channel === 'YouTube'"
    :video-id="item.id"
    :player-vars="{ autoplay: 1 }"
  />
  <video-player v-else :options="videoOptions" />
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentItem } from '@/types';
import { VideoJsPlayerOptions } from 'video.js';
import VideoPlayer from '@/components/video-player';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => ContentItem,
    },
  },

  components: {
    VideoPlayer,
  },

  computed: {
    source(): string {
      switch (this.item.channel) {
        case 'Instagram':
          return this.item.metadata.videos.standard_resolution.url;
        default:
          return '';
      }
    },

    videoOptions(): VideoJsPlayerOptions {
      return {
        sources: [
          {
            src: this.source,
            type: 'video/mp4',
          },
        ],
        poster: this.item.metadata.images.thumbnail.url,
        controls: true,
        fluid: true,
        autoplay: true,
        preload: 'auto',
      };
    },
  },
});
</script>
