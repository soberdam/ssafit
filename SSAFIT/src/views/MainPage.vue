<template>
    <div class="main-main">
        <div>
            <h2 class="main-h2"><span class="main-h2-span">SSAFIT</span>에 오신 것을 환영합니다.</h2>
        </div>
        <!-- <div>
            조회수 별 들어갈 곳
        </div> -->
        <div>
            <input type="button" class="search-btn" value="전체" @click="changePart('none')" />
            <input type="button" class="search-btn" value="하체" @click="changePart('하체')" />
            <input type="button" class="search-btn" value="상체" @click="changePart('상체')" />
            <input type="button" class="search-btn" value="복부" @click="changePart('복부')" />
            <input type="button" class="search-btn" value="전신" @click="changePart('전신')" />
        </div>
    </div>
    <VideoList />
    <hr />
    <div class="main-main">
        <div>
            <YoutubeVideoList />
        </div>
        <div class="slider">
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
        </div>
    </div>
</template>

<script setup>
import VideoList from '@/components/video/VideoList.vue';
import { usevideoStore } from '@/stores/video'
// import YoutubeVideoDetail from '../components/youtube/YoutubeVideoDetail.vue';
import { ref, onMounted } from 'vue'
onMounted(() => {
    const part = 'none'
    const orderBy = 'viewCnt'
    store.getvideoList(part, orderBy)
})
const part = ref('none')
const orderBy = ref('viewCnt')

const store = usevideoStore()


const changePart = function (newPart) {
    part.value = newPart
    store.getvideoList(part.value, orderBy.value)
}
</script>
<style scoped>
.main-main {
    margin: 0 auto;
    width: 1150px;
}

.main-h2 {
    color: #555;
}

.main-h2-span {
    color: rgb(55, 182, 140);
}

.slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 270px;
    border: solid #ccc;
    border-radius: 10px;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto;
    background-position: center;
    background-repeat: repeat;
    animation: slider 7.5s infinite linear;
}

.slide:nth-child(1) {
    background-image: url("../assets/img1.jpg");
    animation-delay: 0;
}

.slide:nth-child(2) {
    background-image: url("../assets/img2.jpeg");
    animation-delay: -2.5s;
}

.slide:nth-child(3) {
    background-image: url("../assets/img3.png");
    animation-delay: -5s;
}

@keyframes slider {
    0% {
        transform: translateX(0);
    }

    26% {
        transform: translateX(0);
    }

    33% {
        transform: translateX(-100%);
        animation-timing-function: step-end;
    }

    93% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}

.search-btn {
    margin-top: 3px;
    margin-left: 20px;
    margin-bottom: 3px;
    color: #fff;
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: solid 2px rgb(184, 225, 211);
    background-color: rgb(184, 225, 211);
    transition: 0.5s;
    cursor: pointer;
}

.search-btn:hover {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 60px;
    height: 40px;
    background-color: rgb(55, 182, 140);
    border: solid 2px rgb(55, 182, 140);
}
</style>