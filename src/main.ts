import { createApp } from "vue";
import { createPinia } from "pinia";
import {IonicVue} from "@ionic/vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(IonicVue);
app.use(createPinia());
app.use(router);

app.mount("#app");
