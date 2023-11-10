<template>
    <div>
        <h4>검색 결과</h4>
        <!-- <button @click="store.getvideoList">전체</button> -->
        <ul>
            <VideoListItem v-for="video in store.videoList" :key="video.url" :video="video" />
        </ul>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usevideoStore } from '@/stores/video'
import VideoListItem from './VideoListItem.vue';
const store = usevideoStore()

onMounted(() => {
    store.getvideoList();
});
</script>

<style  scoped></style>