<template>
    <div>
        <input class="search-input" type="text" placeholder="검색어를 입력하세요" />
        <button class="search-btn" type="submit">검색</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.search-input {
    width: 200px;
    height: 30px;
    padding-left: 5px;
    border-radius: 10px;
    border: solid 2px rgb(55, 182, 140);
}

.search-input::placeholder {
    color: rgb(55, 182, 140);
    opacity: 50%;
}

.search-btn {
    margin-left: 10px;
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: solid 2px rgb(55, 182, 140);
    background-color: rgb(184, 225, 211);
    transition: 0.2s;
}

.search-btn:hover {
    background-color: rgb(55, 182, 140);
}

.search-btn:click {
    background-color: rgb(184, 225, 211);
}
</style>