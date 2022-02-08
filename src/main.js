import { createApp } from "vue";
import { registerScrollSpy } from "vue3-scroll-spy";
import App from "./App.vue";
import "./assets/global.css";

const app = createApp(App);
registerScrollSpy(app)
app.mount("#app");
