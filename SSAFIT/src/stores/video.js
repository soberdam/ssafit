import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

const REST_video_API = `http://localhost:8080/api-video`;

export const usevideoStore = defineStore("video", () => {
  const videoList = ref([]);
  const getvideoList = function (newPart, OrderBy) {
    axios({
      method: "GET",
      url: REST_video_API,
      params: {
        part: newPart,
        orderBy: OrderBy,
      },
    }).then((response) => {
      videoList.value = response.data;
    });
  };

  return {
    videoList,
    getvideoList,
  };
});
