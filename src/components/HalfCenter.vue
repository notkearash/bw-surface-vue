<template>
    <div class="half" :class="{ black: isBlack }">
        <div class="text">
            <h1>{{ title }}</h1>
            <hr :class="{ hr: isBlack }" />
            <p>{{ description }}</p>
            <transition-group name="button">
                <button
                    v-if="showButton"
                    @mouseenter="toggleShowButtonText"
                    @mouseleave="toggleShowButtonText"
                    @click="toggleHalf"
                >
                    <img :src="buttonImgSource" alt="laptop" />
                    <h2 v-if="showButtonText">{{ buttonText }}</h2>
                </button>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "description", "showButton", "buttonText", "buttonImgSource", "isBlack"],
    data() {
        return {
            showButtonText: false,
        };
    },
    methods: {
        toggleShowButtonText() {
            this.showButtonText = !this.showButtonText;
        },

        toggleHalf() {
            this.$emit("toggleHalf");
        },
    },
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
    margin: auto;
    width: 50%;
    text-align: center;
}

.black {
    background-color: #000;
    color: white;
    transition: all ease 0.3s;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid #fff;
    background: #fff;
    cursor: pointer;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    font-size: clamp(0.5rem, 0.3239rem + 0.4695vw, 1rem);
    font-family: "Open Sans", sans-serif;
}

img {
    width: 10%;
    height: 10%;
    margin-top: auto;
    margin-bottom: .2rem;
}

h1 {
    letter-spacing: 1px;
    font-weight: 100;
    font-size: clamp(2.5rem, 1.9718rem + 1.4085vw, 4rem);
}

p {
    font-size: clamp(1rem, 0.7887rem + 0.5634vw, 1.6rem);
}

hr {
    border-top: 1px solid #000;
    width: 25%;
}

hr.hr {
    border-top: 1px solid #fff;
    width: 25%;
}

/* Animations */
.button-move {
    transition: all ease 1s;
}
</style>
