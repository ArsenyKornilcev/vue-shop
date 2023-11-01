<template>
	<header>
		<div class="logo">
			{{ brandName }}
		</div>
		<div class="navigate">
			<div class="menu">
				<ul>
					<li
						v-for="link in links"
						:key="link.id">
						<router-link :to="{ name: link.name}">{{
							link.text
						}}</router-link>
					</li>
				</ul>
			</div>
			<div class="auth">
				<button
					v-if="!isAuth"
					@click="authorization(true)">
					Sign In
				</button>
				<button
					v-if="isAuth"
					@click="authorization(false)">
					Sign Out
				</button>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		name: "TheHeader",
		props: ["links", "brandName"],
		emits: ["auth"],
		methods: {
			authorization(bool) {
				this.$emit("auth", bool);
			},
		},
		computed: {
			isAuth() {
				return this.$store.state.authorization.isLoggedIn;
			},
		},
	};
</script>
<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		color: #4d4d4d;
		padding: 20px 40px;
		box-shadow: 0 0 6px #bdbdbd;
		transition: 0.3s ease;
	}
	header:hover {
		box-shadow: 0 0 10px #bdbdbd;
	}
	.logo {
		font-size: 24px;
		font-weight: bold;
	}
	.menu {
		display: flex;
		align-items: center;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		flex-flow: row wrap;
		gap: 10px;
	}
	a {
		text-decoration: none;
		color: inherit;
		font-size: 18px;
	}
	button {
		border-radius: 5px;
		padding: 8px 14px;
		font-weight: bold;
		font-size: 16px;
		color: #fff;
		background: #1aa582;
		transition: 0.3s ease;
		border: none;
	}
	button:hover {
		background: #178f71;
		color: #ebebeb;
	}
	.navigate {
		display: flex;
		flex-flow: row wrap;
		gap: 20px;
	}
</style>
