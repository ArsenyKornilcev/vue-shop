export default {
	namespaced: true,
	state() {
		return {
			cartItems: [],
		};
	},
	mutations: {
		addItem(state, payload) {
			state.cartItems.append(payload);
		},
	},
	actions: {
		addItem(context, payload) {
			context.commit("addItem", payload);
		},
	},
	getters: {
		cartItems(state) {
			return state.cartItems;
		},
	},
};
