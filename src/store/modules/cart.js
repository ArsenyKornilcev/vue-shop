export default {
	namespaced: true,
	state() {
		return {
			cartItems: [],
			total: 0,
			quantity: 0,
		};
	},
	mutations: {
		addItem(state, payload) {
			// state.cartItems.append(payload);
			state.quantity++;
			console.log(payload);
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
		itemsQuantity(state) {
			return state.quantity;
		},
		getTotalAmount(state) {
			return state.total;
		},
	},
};
