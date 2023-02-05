<template>
    <footer>All rights reserved by Kearash. &copy; 2022</footer>
    <nav>
        <a href="#home">Home</a>
        <a href="#modes">Modes</a>
        <a href="#cases">Cases</a>
        <a href="#contact">Contact</a>
        <a href="#buy">Buy</a>
    </nav>
    <bw-header id="home" :title="'Always Ready, Always Pro!'" :smallText="'Microsoft Surface Pro X'"
        :imgSource="headerImg" v-scroll-spy />
    <container id="modes" v-scroll-spy>
        <transition-group name="fade">
            <half-center v-if="showHalf[0]" title="Use it as a Tablet." :description="lorem[0]" :showButton="true"
                :buttonText="'Or preview as a Laptop'" :buttonImgSource="buttonImg[0]" :isBlack="true"
                @toggleHalf="halfTransitions" />
            <half-img v-if="showHalfImg[0]" :imgSource="tabletImg" />
            <half-img v-if="showHalfImg[1]" :imgSource="laptopImg" />
            <half-center v-if="showHalf[1]" title="Use it as a Laptop." :description="lorem[1]" :showButton="true"
                :buttonText="'Or preview as a Tablet'" :buttonImgSource="buttonImg[1]" @toggleHalf="halfTransitions" />
        </transition-group>
    </container>
    <cases id="cases"
        :smallText="'Photoshop®,* applications optimized for Windows on ARM with Surface Pro X.'" />
    <container id="contact">
        <half-center title="We ❤️ all of you!." :description="lorem[1]" :isBlack="true" />
        <half-location />
    </container>
    <container id="buy">
        <half-img :imgSource="laptopImg" :isBlack="true" />
        <half-center :isBlack="true" title="More story @ Your hands!" :description="lorem[1]" :showButton="true"
            :buttonImgSource="buttonImg[2]" :buttonText="'Buy it for $499*'" />
    </container>
</template>

<script>
import Header from "./components/Header.vue";
import Container from "./components/Container.vue";
import HalfImg from "./components/HalfImg.vue";
import HalfCenter from "./components/HalfCenter.vue";
import HalfLocation from "./components/HalfLocation.vue";
import HalfFeatures from "./components/HalfFeatures.vue";
import Cases from "./components/Cases.vue";

export default {
    name: "App",
    components: {
        "bw-header": Header,
        container: Container,
        "half-img": HalfImg,
        "half-center": HalfCenter,
        "half-location": HalfLocation,
        "half-features": HalfFeatures,
        cases: Cases,
    },
    data() {
        return {
            showHalf: [true, false],
            showHalfImg: [true, false],
            headerImg: require("./assets/img/mspx-carbon.jpg"),
            tabletImg: require("./assets/img/tabletw-removebg.png"),
            laptopImg: require("./assets/img/laptop-mode.png"),
            buttonImg: [
                require("./assets/img/laptop-computer.png"),
                require("./assets/img/tablet-icon.png"),
                require("./assets/img/shopping-cart.png"),
            ],
            lorem: [
                "Surface Slim Pen 2 pairs and charges wirelessly, always at your fingertips in Surface Pro Signature Keyboard , so it's ready when inspiration strikes.*",
                "More vertical screen real estate than a typical laptop, to view Word docs, websites and more perfectly scaled.",
            ],
        };
    },
    methods: {
        halfTransitions() {
            for (const each in this.showHalf) {
                this.showHalf[each] = !this.showHalf[each];
            }
            for (const each in this.showHalfImg) {
                this.showHalfImg[each] = !this.showHalfImg[each];
            }
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

#app {
    font-family: "Open Sans", sans-serif;
    overflow-x: hidden;
}

nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #000;
    text-align: center;
    z-index: 2;
    font-size: clamp(0.7rem, 0.4535rem + 0.6573vw, 1.4rem);
}

nav a {
    position: relative;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 1.6em;
    display: inline-block;
}

nav a:hover {
    background: #fff;
    color: #000;
    transition: all ease 0.3s;
}

footer {
    text-align: center;
    color: #fff;
    background-color: #000;
    padding: 8px;
}

.grid {
    display: grid;
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
    transition: all ease 1s;
}
</style>
