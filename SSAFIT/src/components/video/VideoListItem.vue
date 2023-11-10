<template>
    <li>
        <div class="video-list">
            <iframe class="video-list-item" width="360px" height="240px" :src='`https://www.youtube.com/embed/${video.url}`'
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <div class="video-list-f">
                <a class="item-a">{{ video.title }}</a>
                <div class="video-list-pcv">
                    <button class="search-btn">{{ video.part }}</button>
                    <div class="video-list-cv">
                        <div>{{ video.channelName }}</div>
                        <div>{{ video.viewCnt }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <img :src="video.url"> -->
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

<style scoped>
.video-list {
    border: solid #ccc;
    border-radius: 10px;
}

.video-list-item {
    border-radius: 10px 10px 0px 0px;
    width: 360px;
    height: 240px;
    display: flex;
    flex-direction: column;
}


.video-list-f {
    border-radius: 0 0 10px 10px;
    width: 320px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
}

.video-list-pcv {
    display: flex;
    justify-content: space-between;
}

.video-list-cv {
    display: flex;
    flex-direction: column;
    align-items: end;
}

.item-a {
    height: 50px;
    font-size: 18px;
    cursor: pointer;
}

.search-btn {
    color: #fff;
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: solid 2px rgb(225, 184, 221);
    background-color: rgb(225, 184, 221);
    transition: 0.2s;
    cursor: pointer;
}

.search-btn:hover {
    background-color: rgb(182, 55, 152);
    border: solid 2px rgb(182, 55, 152);
}
</style>
