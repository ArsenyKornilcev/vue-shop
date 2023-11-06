import { createStore } from "vuex";
import authorization from "@/store/modules/authorization";
import product from "./modules/product";

const store = createStore({
	modules: {
		authorization: authorization,
		product: product,
	},
});

export default store;
