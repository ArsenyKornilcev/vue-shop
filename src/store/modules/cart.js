export default {
	namespaced: true,
	state() {
		return {
			cartItems: [],
		};
	},
	getters: {
		cartItems(state) {
			return state.cartItems;
		},
	},
};
