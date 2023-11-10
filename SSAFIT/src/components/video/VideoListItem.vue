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
                        <div class="video-cha">{{ video.channelName }}</div>
                        <div class="video-cnt">조회수 : {{ video.viewCnt }}회</div>
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
    transition: 0.3s;
    width: 360px;
    height: 340px;
    margin: 10px;
}

.video-list:hover {
    width: 370px;
    height: 350px;
    margin: 5px;
}

.video-list-item {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    height: 60%;
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

.video-cha {
    color: #555;
}

.video-cnt {
    color: #555;
    font-size: 13px;
}

.item-a {
    height: 50px;
    font-size: 18px;
    cursor: pointer;
    color: #555;
    transition: 0.3s;
}

.item-a:hover {
    color: rgb(225, 184, 221);
}

.search-btn {
    color: #fff;
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: solid 2px rgb(225, 184, 221);
    background-color: rgb(225, 184, 221);
}
</style>
