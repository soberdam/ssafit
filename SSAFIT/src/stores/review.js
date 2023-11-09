import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

const REST_review_API = `http://localhost:8080/api-review/review`;

export const usereviewStore = defineStore("review", () => {
  const reviewList = ref([]);
  const getreviewList = function () {
    axios.get(REST_review_API).then((response) => {
      reviewList.value = response.data;
      console.log(reviewList.value);
    });
  };

  //게시글 한개
  const review = ref({});
  const getreview = function (id) {
    axios.get(`${REST_review_API}/${id}`).then((response) => {
      review.value = response.data;
    });
  };

  //게시글 등록
  const createreview = function (review) {
    axios({
      url: REST_review_API,
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

  const updatereview = function () {
    axios.put(REST_review_API, review.value).then(() => {
      router.push({ name: "reviewList" });
    });
  };

  const searchreviewList = function (searchCondition) {
    axios
      .get(REST_review_API, {
        params: searchCondition,
      })
      .then((res) => {
        reviewList.value = res.data;
      });
  };

  return {
    reviewList,
    getreviewList,
    review,
    getreview,
    createreview,
    updatereview,
    searchreviewList,
  };
});
