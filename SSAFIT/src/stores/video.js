import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

const REST_video_API = `http://localhost:8080/api-video/video`;

export const usevideoStore = defineStore("video", () => {
  const videoList = ref([]);
  const getvideoList = function () {
    axios.get(REST_video_API).then((response) => {
      videoList.value = response.data;
      console.log(videoList.value);
    });
  };

  //게시글 등록
  // const createvideo = function (video) {
  //   axios({
  //     url: REST_video_API,
  //     method: "POST",
  //     //아래꺼 없어도 알아서 보내더라 axios 쵝오~
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: video,
  //   })
  //     .then(() => {
  //       //response 응답으로 들어온 게시글의 id를 이용해서
  //       //상세보기로 바로 점프도 가넝이야~~
  //       router.push({ name: "videoList" });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return {
    videoList,
    getvideoList,
  };
});
