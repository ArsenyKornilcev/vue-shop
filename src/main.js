import { createApp } from "vue";

import router from "@/router";
import store from "@/store/store";

import App from "./App.vue";
import TheButton from "@/components/layout/TheButton";

const app = createApp(App);

app.component("TheButton", TheButton);

app.use(router);
app.use(store);
app.mount("#app");
