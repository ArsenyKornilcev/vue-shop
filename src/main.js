import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/components/NotFound";
import PageOne from "@/components/pages/PageOne";
import MainPage from "@/components/pages/MainPage";

import authorization from "@/store/authorization";

import App from "./App.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: MainPage,
			name: "home",
		},
		{
			path: "/:notFound(.*)",
			component: NotFound,
		},
		{
			path: "/page-one",
			component: PageOne,
			name: "pageOne",
		},
	],
});

const store = createStore({
	modules: {
		authorization: authorization,
	},
});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
