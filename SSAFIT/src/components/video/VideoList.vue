<template>
    <div class="video-list">
        <h4>검색 결과</h4>
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
    width: 1150px;
    margin: 0px auto;
}

.list-ul {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
}
</style>