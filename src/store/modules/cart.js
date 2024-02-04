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
			const itemInCart = state.cartItems.find(
				(item) => item.id === payload.id
			);

			if (itemInCart) {
				itemInCart.quantity++;
				state.quantity++;
				state.total += itemInCart.price;
				return;
			}

			const newItem = {
				id: payload.id,
				image: payload.image,
				title: payload.title,
				description: payload.description,
				price: payload.price,
				quantity: 1,
			};

			state.cartItems.push(newItem);
			state.total += newItem.price;
			state.quantity++;
		},
		
		removeItem(state, payload) {
			const productToRemoveIndex = state.cartItems.findIndex(
				(item) => item.id === payload.id
			);
			const productToRemove = state.cartItems[productToRemoveIndex];

			if (productToRemove.quantity == 1) {
				state.cartItems.splice(productToRemoveIndex, 1);
			}
			productToRemove.quantity--;
			state.quantity--;
			state.total -= productToRemove.price;
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
