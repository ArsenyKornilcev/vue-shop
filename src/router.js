import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/components/pages/NotFound";
import CartPage from "@/components/pages/CartPage";
import AdminPage from "@/components/pages/AdminPage";
import ProductsPage from "@/components/pages/ProductsPage";
import RegistrationPage from "@/components/pages/RegistrationPage";

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
			path: "/cart",
			component: CartPage,
			name: "cart",
		},
		{
			path: "/admin",
			component: AdminPage,
			name: "admin",
		},
		{
			path: "/registration",
			component: RegistrationPage,
			name: "registration",
		},
	],
});

export default router;
