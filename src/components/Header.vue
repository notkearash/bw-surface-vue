<template>
    <div class="container" :class="{ black: isBlack }">
        <h1>{{ title }}</h1>
        <hr class="hr">
        <p> {{ smallText }} </p>
        <img :src="imgSource" />
    </div>
</template>

<script>
export default {
    props: ["title", 'smallText', 'imgSource', "isBlack"]
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.black {
    background-color: #000;
    color: white;
    transition: all ease 0.3s;
}

h1 {
    text-align: center;
    letter-spacing: 1px;
    font-size: 3rem;
    font-weight: 100;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
hr.hr {
    border-top: 1px solid #000;
    width: 25%;
}
</style>
