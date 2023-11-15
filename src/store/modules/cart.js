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
		removeItem(state, payload) {
			const productToRemoveIndex = state.cartItems.findIndex(
				(item) => item.id === payload.id
			);
			console.log(payload.id)
			console.log(productToRemoveIndex);
			state.cartItems.splice(productToRemoveIndex, 1);
			state.quantity--;
		},
	},
	actions: {
		addItem(context, payload) {
			const products = context.rootGetters["product/allProducts"];
			const productForCart = products.find(
				(product) => product.id === payload.id
			);
			context.commit("addItem", productForCart);
		},
		removeItem(context, payload) {
			context.commit("removeItem", payload);
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
