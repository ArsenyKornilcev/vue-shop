import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/components/NotFound";
import PageOne from "@/components/pages/PageOne";
import MainPage from "@/components/pages/MainPage";

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

export default router;
