import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/components/NotFound";
import CartPage from '@/components/pages/CartPage';
import AdminPage from '@/components/pages/AdminPage';
import ProductsPage from "@/components/pages/ProductsPage";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: ProductsPage,
			name: "products",
		},
		{
			path: "/:notFound(.*)",
			component: NotFound,
		},
		{
			path: "/page-one",
			component: CartPage,
			name: "cart",
		},
		{
			path: "/page-one",
			component: AdminPage,
			name: "admin",
		},
	],
});

export default router;
