<template>
  <li @click="clickVideo">
    <img :src="video.snippet.thumbnails.default.url">
    <span>{{ video.snippet.title }}</span>
    <p>{{ video.snippet.channelTitle }}</p>
    <!-- <p>{{ video.statistics.viewCount }}</p> -->
  </li>
</template>

<script setup>
import { useYoutubeStore } from '@/stores/youtube';
const store = useYoutubeStore();

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
});


</script>

<style scoped></style>
