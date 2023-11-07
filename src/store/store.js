import { createStore } from "vuex";
import authorization from "@/store/modules/authorization";
import product from "./modules/product";
import cart from "./modules/cart";

const store = createStore({
	modules: {
		authorization: authorization,
		product: product,
		cart: cart
	},
});

export default store;
