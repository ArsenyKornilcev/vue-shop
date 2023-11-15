<template>
	<header>
		<div class="brand-name">
			<router-link :to="{ name: 'products' }">
				{{ brandName }}
			</router-link>
		</div>

		<div class="menu">
			<ul>
				<li
					v-for="link in availableLinks"
					:key="link.id">
					<div class="link">
						<router-link :to="{ name: link.name }">
							{{ link.text }}
						</router-link>
						<span
							class="label label_small"
							v-if="link.counter"
							>{{ itemsQuantity }}</span
						>
					</div>
				</li>
			</ul>
		</div>

		<div class="auth">
			<button @click="authorization">
				{{ authBtnText }}
			</button>
		</div>
	</header>
</template>
<script>
	export default {
		name: "TheHeader",
		props: ["links", "brandName"],
		emits: ["auth"],
		methods: {
			authorization() {
				const authBool = !this.isAuth;
				this.$emit("auth", authBool);
			},
		},
		computed: {
			isAuth() {
				return this.$store.state.authorization.isLoggedIn;
			},
			availableLinks() {
				return this.links.filter(
					(link) => !link.auth || (link.auth && this.isAuth)
				);
			},
			authBtnText() {
				if (!this.isAuth) {
					return "Sign In";
				} else {
					return "Sign Out";
				}
			},
			itemsQuantity() {
				return this.$store.getters['cart/itemsQuantity']
			}
		},
	};
</script>
<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		color: #4d4d4d;
		padding: 20px 10vw;
		box-shadow: 0 0 6px #bdbdbd;
		transition: 0.3s ease;
		position: relative;
		top: 0;
		background: #fff;
	}
	header:hover {
		box-shadow: 0 0 10px #bdbdbd;
	}
	.brand-name {
		font-size: 24px;
		font-weight: bold;
		display: flex;
		align-items: center;
	}
	.menu {
		display: flex;
		align-items: center;
		justify-self: left;
		position: absolute;
		top: 50%;
		left: 50%;
		transition: 0.3s ease;
		transform: translate(-50%, -50%);
	}
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		flex-flow: row wrap;
		gap: 20px;
	}
	li {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: inherit;
		font-size: 18px;
		transition: 0.3s ease;
		display: block;
	}

	a.router-link-active,
	a:hover {
		text-shadow: 0 0 1px #222;
	}
	.brand-name a.router-link-active {
		text-shadow: none;
	}
	.brand-name a:hover {
		text-shadow: 0 0 1px #222;
	}
	.link {
		display: flex;
		gap: 10px;
	}

	button {
		border-radius: 5px;
		padding: 8px 14px;
		font-weight: bold;
		font-size: 16px;
		color: #f4f4f4;
		background: #1cad88;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
		min-width: 95px;
	}
	button:hover {
		background: #1eb892;
		color: #fff;
	}
	button:active {
		color: #ebebeb;
		background: #178f71;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
