<template>
    <div class="form__div">
        <input type="text" class="form__input" placeholder=" " v-model="keyword">
        <label for="" class="form__label">검색어를 입력하세요</label>
        <button class="search-btn" @click="search">검색</button>
    </div>
</template>

<script setup>
import { useYoutubeStore } from '@/stores/youtube'
import { ref } from 'vue'
const keyword = ref('')

const store = useYoutubeStore()

const search = function () {
    store.youtubeSearch(keyword.value)
}
</script>
<style scoped>
.search-input {
    width: 200px;
    height: 30px;
    padding-left: 5px;
    border-radius: 10px;
    border: solid 2px rgb(55, 182, 140);
}

.form__div {
    position: relative;
    height: 52px;
    margin-top: 16px;
}

.form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 30px;
    padding-left: 15px;
    border-radius: 10px;
    border: 2px solid #DADCE0;
    outline: none;
    background: none;
    z-index: 1;
}

.form__label {
    position: absolute;
    left: 1rem;
    top: 0.6rem;
    padding: 0 0.25rem;
    background-color: #fff;
    color: #80868B;
    font-size: 1rem;
    transition: 0.3s;
}

.form__input:focus+.form__label {
    top: -0.3rem;
    left: 0.8rem;
    color: rgb(55, 182, 140);
    font-size: .75rem;
    font-weight: 500;
    z-index: 10;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus)+.form__label {
    top: -0.3rem;
    left: 0.8rem;
    z-index: 10;
    font-size: .75rem;
    font-weight: 500;
}

/*Input focus*/
.form__input:focus {
    border: 2px solid rgb(55, 182, 140)
}

.search-input::placeholder {
    color: rgb(55, 182, 140);
    opacity: 50%;
}

.search-btn {
    margin-left: 230px;
    color: #fff;
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: solid 2px rgb(184, 225, 211);
    background-color: rgb(184, 225, 211);
    transition: 0.2s;
    cursor: pointer;
}

.search-btn:hover {
    background-color: rgb(55, 182, 140);
    border: solid 2px rgb(55, 182, 140);
}

.search-btn:click {
    background-color: rgb(184, 225, 211);
}
</style>