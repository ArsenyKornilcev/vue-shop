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
			state.cartItems.push(payload);
			state.quantity++;
			console.log(payload);
		},
	},
	actions: {
		addItem(context, payload) {
			const products = context.rootGetters["product/allProducts"];
			const productForCart = products.find((product) => product.id === payload.id)
			context.commit("addItem", productForCart);
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
