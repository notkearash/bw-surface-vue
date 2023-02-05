<template>
    <div class="half" :class="{ black: isBlack }">
        <img :src="imgSource" alt="tablet" />
    </div>
</template>

<script>
export default {
    props: ["imgSource", "isBlack"],
};
</script>

<style scoped>
.half {
    display: flex;
    min-width: 50vw;
    min-height: 50vh;
    flex-wrap: wrap;
    flex-direction: column;
    transition: all ease 0.3s;
}

.text {
    margin: 25px;
    position: relative;
    top: 25%;
    max-width: 50%;
}

.black {
    background-color: #000;
    color: white;
    transition: all ease 0.3s;
}

img {
    display: block;
    margin: auto;
    width: clamp(25rem, 16.1972rem + 23.4742vw, 50rem);
}

button {
    border: none;
    padding: 12px;
    font-size: 18px;
    font-family: "Roboto Mono", monospace;
}

button:hover {
    padding: 10px;
    border: white solid 2px;
    color: white;
    background-color: black;
    font-size: 18px;
    font-family: "Roboto Mono", monospace;
    transition-duration: 0.4s;
}
</style>
