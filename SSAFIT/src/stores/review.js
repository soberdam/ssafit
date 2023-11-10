import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

const REST_Review_API = `http://localhost:8080/api-review`;

export const useReviewStore = defineStore("review", () => {
  const reviewList = ref([]);
  const getReviewList = function () {
    axios.get(REST_Review_API).then((response) => {
      ReviewList.value = response.data;
    });
  };

  //게시글 한개
  const review = ref({});
  const getReview = function (id) {
    axios.get(`${REST_Review_API}/${id}`).then((response) => {
      review.value = response.data;
    });
  };

  //게시글 등록
  const createReview = function (review) {
    axios({
      url: REST_Review_API,
      method: "POST",
      //아래꺼 없어도 알아서 보내더라 axios 쵝오~
      headers: {
        "Content-Type": "application/json",
      },
      data: review,
    })
      .then(() => {
        //response 응답으로 들어온 게시글의 id를 이용해서
        //상세보기로 바로 점프도 가넝이야~~
        router.push({ name: "reviewList" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateReview = function () {
    axios.put(REST_Review_API, review.value).then(() => {
      router.push({ name: "reviewList" });
    });
  };

  const searchReviewList = function (searchCondition) {
    axios
      .get(REST_Review_API, {
        params: searchCondition,
      })
      .then((res) => {
        reviewList.value = res.data;
      });
  };

  return {
    reviewList,
    getReviewList,
    review,
    getReview,
    createReview,
    updateReview,
    searchReviewList,
  };
});
