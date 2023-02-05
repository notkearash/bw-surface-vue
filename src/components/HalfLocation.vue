<template>
    <div class="half" :class="{ black: isBlack }">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43824.951132778675!2d12.1484843!3d46.6453408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88867f341f4bfe75%3A0x5e55343553c8cce9!2sAlabama%2C%20USA!5e0!3m2!1sen!2s!4v1640617692887!5m2!1sen!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
    </div>
</template>

<script>
export default {
    props: [
        "title",
        "description",
        "showButton",
        "buttonText",
        "buttonImgSource",
        "isBlack",
    ],
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
    min-width: 50%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all ease 0.3s;
}

iframe {
    top: 50%;
}
</style>
