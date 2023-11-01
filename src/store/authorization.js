export default {
	namespaced: true,
	state() {
		return {
			isLoggedIn: false,
		};
	},
	mutations: {
		authenticate(state, payload) {
			state.isLoggedIn = payload;
		},
	},
	actions: {
		authenticate(context, payload) {
			setTimeout(() => {
				context.commit("authenticate", payload);
			}, 2000);
		},
	},
};
