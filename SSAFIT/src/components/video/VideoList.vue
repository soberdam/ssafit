<template>
    <div class="video-list">
        <!-- <button @click="store.getvideoList">전체</button> -->
        <ul class="list-ul">
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

<style  scoped>
* {
    list-style: none;
}

.video-list {
    width: 1170px;
    margin: 10px auto;
}

.list-ul {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}
</style>