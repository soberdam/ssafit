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

  return {
    videoList,
    getvideoList,
  };
});
