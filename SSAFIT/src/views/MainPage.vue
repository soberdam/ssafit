<template>
    <div class="main-main">
        <div>
            <h2 class="main-h2"><span class="main-h2-span">SSAFIT</span>에 오신 것을 환영합니다.</h2>
        </div>
    </div>
    <hr />
    <VideoList />
    <div class="main-main">
        <div>
            조회수 별 들어갈 곳
        </div>
        <div>
            <h3>추천 운동부위</h3>
            <button class="search-btn">전체</button>
            <button class="search-btn">하체</button>
            <button class="search-btn">상체</button>
            <button class="search-btn">복부</button>
            <button class="search-btn">전신</button>
        </div>
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
import YoutubeVideoList from '@/components/youtube/YoutubeVideoList.vue';
// import YoutubeVideoDetail from '../components/youtube/YoutubeVideoDetail.vue';
</script>
<style scoped>
.main-main {
    margin: 0 auto;
    width: 1000px;
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
    width: 60px;
    height: 40px;
    background-color: rgb(55, 182, 140);
    border: solid 2px rgb(55, 182, 140);
}
</style>