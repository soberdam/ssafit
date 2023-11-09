<template>
    <div class="header">
        <RouterLink class="main-link" :to="{ name: 'main' }">SSAFIT</RouterLink>
        <SearchComp class="SearchComp-link" />
        <div class="log-reg">
            <RouterLink class="my-link" :to="{ name: 'my' }">my</RouterLink>
            <RouterLink class="login-link" :to="{ name: 'login' }">login</RouterLink>
            <RouterLink class="regist-link" :to="{ name: 'regist' }">regist</RouterLink>
        </div>
    </div>
</template>

<script setup>
import SearchComp from '../SearchComp.vue';


</script>

<style scoped>
.header {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: rgb(247, 237, 247); */
}

.main-link {
    width: 300px;
    font-size: 40px;
    font-weight: 700;
    transition: 0.2s;
}

.main-link:hover {
    width: 290px;
    padding-left: 10px;
    animation: rainbow 2.5s linear;
    animation-iteration-count: infinite;
}

@keyframes rainbow {

    100%,
    0% {
        color: rgb(255, 0, 0);
    }

    8% {
        color: rgb(255, 127, 0);
    }

    16% {
        color: rgb(255, 255, 0);
    }

    25% {
        color: rgb(127, 255, 0);
    }

    33% {
        color: rgb(0, 255, 0);
    }

    41% {
        color: rgb(0, 255, 127);
    }

    50% {
        color: rgb(0, 255, 255);
    }

    58% {
        color: rgb(0, 127, 255);
    }

    66% {
        color: rgb(0, 0, 255);
    }

    75% {
        color: rgb(127, 0, 255);
    }

    83% {
        color: rgb(255, 0, 255);
    }

    91% {
        color: rgb(255, 0, 127);
    }
}


.log-reg {
    width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
}

.login-link,
.regist-link,
.my-link {
    transition: 0.2s;
}

.login-link:hover,
.regist-link:hover,
.my-link:hover {
    color: rgb(55, 182, 140);
    margin-bottom: 10px;
}

a {
    text-decoration: none;
    color: black;
    font-size: 20px;
}
</style>