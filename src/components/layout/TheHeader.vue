<template>
	<header>
		<div class="logo">
			{{ brandName }}
		</div>
		<div class="menu">
			<ul>
				<template
					v-for="link in links"
					:key="link.id">
					<li v-if="!link.auth || (link.auth && isAuth)">
						<router-link :to="{ name: link.name }">{{
							link.text
						}}</router-link>
					</li>
				</template>
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
		padding: 20px 10vw;
		box-shadow: 0 0 6px #bdbdbd;
		transition: 0.3s ease;
		position: relative;
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
		justify-self: left;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
		transition: 0.3s ease;
	}
	a:hover {
		text-shadow: 0 0 1px #222;
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
</style>
