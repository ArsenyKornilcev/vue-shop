import { createStore } from "vuex";
import authorization from "@/store/modules/authorization";

const store = createStore({
	modules: {
		authorization: authorization,
	},
});

export default store;
