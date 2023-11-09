<template>
    <div class="login-form">
        <form action="" class="form">
            <h1 class="form__title">login</h1>

            <div class="login-div">
                <input type="text" class="login-input" placeholder=" ">
                <label for="" class="login-label">ID</label>
            </div>

            <div class="login-div">
                <input type="password" class="login-input" placeholder=" ">
                <label for="" class="login-label">Password</label>
            </div>

            <input type="submit" class="login-button" value="login">
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>
.login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

.form {
    width: 360px;
    padding: 3rem 2rem;
    border-radius: 1rem;
    /* box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2); */
}

.form__title {
    font-weight: 500;
    margin-bottom: 2.5rem;
}

.login-div {
    position: relative;
    height: 52px;
    margin-bottom: 1.5rem;
}

.login-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 50%;
    font-size: 1rem;
    border: 2px solid #DADCE0;
    border-radius: 0.5rem;
    outline: none;
    padding: 1rem;
    background: none;
    z-index: 1;
}

.login-label {
    position: absolute;
    left: 1rem;
    top: 1.3rem;
    padding: 0 0.25rem;
    background-color: #fff;
    color: #80868B;
    font-size: 1rem;
    transition: 0.3s;
}

.login-button {
    display: block;
    margin-left: auto;
    padding: 0.75rem 2rem;
    outline: none;
    border: none;
    background-color: rgb(184, 225, 211);
    color: #fff;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.login-button:hover {
    background-color: rgb(55, 182, 140);
}

.login-input:focus+.login-label {
    top: -0.3rem;
    left: 0.8rem;
    color: rgb(55, 182, 140);
    font-size: .75rem;
    font-weight: 500;
    z-index: 10;
}

.login-input:not(:placeholder-shown).login-input:not(:focus)+.login-label {
    top: -0.3rem;
    left: 0.8rem;
    z-index: 10;
    font-size: .75rem;
    font-weight: 500;
}

.login-input:focus {
    border: 2px solid rgb(55, 182, 140)
}
</style>