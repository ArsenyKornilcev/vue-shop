export default {
	namespaced: true,

	state() {
		return {
			products: [
				{
					id: "p1",
					image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
					title: "Book Collection",
					description:
						"A collection of must-read books. All-time classics included! A collection of must-read books. All-time classics included! A collection of must-read books. All-time classics included! A collection of must-read books. All-time classics included! A collection of must-read books. All-time classics included! A collection of must-read books. All-time classics included! A collection of must-read books. All-time classics included! A collection of must-read books. All-time classics included!",
					price: 99.99,
				},
				{
					id: "p2",
					image: "https://i.ibb.co/Dbd6MBC/image.jpg",
					title: "Mountain Tent",
					description: "A tent for the ambitious outdoor tourist.",
					price: 129.99,
				},
				{
					id: "p3",
					image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
					title: "Food Box",
					description:
						"May be partially expired when it arrives but at least it is cheap!",
					price: 6.99,
				},
			],
		};
	},

	mutations: {
		addProduct(state, payload) {
			const newProduct = {
				id: payload.id,
				image: payload.image,
				title: payload.title,
				description: payload.description,
				price: payload.price,
			};

			state.products.push(newProduct);
		},

		// removeItem(state, payload) {
		// 	const productToRemoveIndex = state.cartItems.findIndex(
		// 		(item) => item.id === payload.id
		// 	);
		// 	const productToRemove = state.cartItems[productToRemoveIndex];

		// 	if (productToRemove.quantity == 1) {
		// 		state.cartItems.splice(productToRemoveIndex, 1);
		// 	}
		// 	productToRemove.quantity--;
		// 	state.quantity--;
		// 	state.total -= productToRemove.price;
		// },
	},

	actions: {
		addProduct(context, payload) {
			context.commit("addProduct", payload);
		},
		removeProduct(context, payload) {
			context.commit("removeProduct", payload);
		},
	},

	getters: {
		allProducts(state) {
			return state.products;
		},
	},
};
