import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/components/pages/NotFound";
import CartPage from "@/components/pages/CartPage";
import AdminPage from "@/components/pages/AdminPage";
import ProductsPage from "@/components/pages/ProductsPage";
import RegistrationPage from "@/components/pages/RegistrationPage";
import AuthorizationPage from "@/components/pages/AuthorizationPage";
import ProductPage from "@/components/pages/ProductPage";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: ProductsPage,
			name: "products",
		},
		{
			path: "/product/:id",
			component: ProductPage,
			name: "product",
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
		{
			path: "/auth",
			component: AuthorizationPage,
			name: "auth",
		},
	],
});

export default router;
