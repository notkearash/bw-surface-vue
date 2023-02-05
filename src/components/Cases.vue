<template>
    <div class="container" :class="{ black: isBlack }">
        <transition name="fade">
            <img v-if="imgVisible" :src="imgSource[0]" />
        </transition>
        <hr class="hr" />
        <p>{{ smallText }}</p>
        <div class="btnz">
            <button
                @click="toggleCase(0)"
                :class="{
                    blackhover: isBlack,
                    activewhite: switchActive[0],
                    activeblack: switchActive[0] && isBlack,
                }"
            >
                Edit
            </button>
            <button
                @click="toggleCase(1)"
                :class="{
                    blackhover: isBlack,
                    activewhite: switchActive[1],
                    activeblack: switchActive[1] && isBlack,
                }"
            >
                Design
            </button>
            <button
                @click="toggleCase(2)"
                :class="{
                    blackhover: isBlack,
                    activewhite: switchActive[2],
                    activeblack: switchActive[2] && isBlack,
                }"
            >
                Play
            </button>
            <button
                @click="toggleCase(3)"
                :class="{
                    blackhover: isBlack,
                    activewhite: switchActive[3],
                    activeblack: switchActive[3] && isBlack,
                }"
            >
                Explore
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "smallText", "isBlack"],
    data() {
        return {
            switchActive: [true, false, false, false],
            casesImg: [
                require("../assets/img/edit.jpeg"),
                require("../assets/img/design.jpg"),
                require("../assets/img/play.jpg"),
                require("../assets/img/explore.jpg"),
            ],
            imgSource: [],
            imgVisible: true,
        };
    },
    methods: {
        toggleCase(i) {
            for (const each in this.switchActive) {
                this.switchActive[each] = false;
            }
            this.imgVisible = false;
            this.imgSource[0] = this.casesImg[i];
            setTimeout(() => {
                this.imgVisible = true;
            }, 300);
            this.switchActive[i] = true;
            this.$emit("toggleImage");
        },
    },
    mounted() {
        this.imgSource[0] = this.casesImg[0];
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.black,
.blackhover {
    background-color: #000;
    color: white;
    transition: all ease 0.3s;
}

.activeblack,
.blackhover:hover {
    background-color: #fff;
    color: #000;
    transition: all ease 0.3s;
}

.btnz {
    border: solid #000 1px;
}

button {
    outline: none;
    border: none;
    background: #fff;
    cursor: pointer;
    font-weight: bold;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 14px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-size: clamp(1rem, 0.7887rem + 0.5634vw, 1.6rem);
}

.activewhite,
button:hover {
    transition: all ease 0.3s;
    color: #fff;
    background: #000;
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-left: 8px;
    margin-right: 8px;
    font-family: "Open Sans", sans-serif;
    font-size: clamp(1rem, 0.7887rem + 0.5634vw, 1.6rem);
}

p {
    font-size: clamp(1rem, 0.7887rem + 0.5634vw, 1.6rem);
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: clamp(38rem, -16.2254rem + 144.6009vw, 192rem);
}
hr.hr {
    border-top: 1px solid #000;
    width: 25%;
}

/* Animations */
.move-move {
    transition: all ease 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all ease 0.3s;
}
</style>
