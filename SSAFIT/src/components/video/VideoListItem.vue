<template>
    <li>
        <!-- <img :src="video.url"> -->
        <span>{{ video.title }}</span>
        <span>{{ video.part }}</span>
        <p>{{ video.channelName }}</p>
        <p>{{ video.viewCnt }}</p>
    </li>
</template>

<script setup>
import { usevideoStore } from '@/stores/video';
const store = usevideoStore();

const props = defineProps({
    video: {
        type: Object,
        required: true,
    },
});


</script>

<style scoped></style>
