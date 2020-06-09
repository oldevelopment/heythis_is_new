<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>

<script lang="ts">
import Vue from 'vue';
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from 'video.js';
import 'video.js/dist/video-js.css';
import { Nullable } from '@/types';

export default Vue.extend({
  props: {
    options: {
      type: Object as () => VideoJsPlayerOptions,
      default: () => ({}),
    },
  },

  data() {
    return {
      player: null as Nullable<VideoJsPlayer>,
    };
  },

  mounted() {
    console.log(this.options);
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      // console.log('onPlayerReady', this);
    });
  },

  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
});
</script>
