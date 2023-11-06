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
						<span v-if="link.count >= 0">{{ link.count }}</span>
					</div>
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
				v-else
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
			availableLinks() {
				return this.links.filter(
					(link) => !link.auth || (link.auth && this.isAuth)
				);
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
		position: sticky;
		top: 0;
		background: #fff;
	}
	header:hover {
		box-shadow: 0 0 10px #bdbdbd;
	}
	.brand-name {
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
	}

	a.router-link-active,
	a:hover {
		text-shadow: 0 0 1px #222;
	}
	.brand-name a.router-link-active {
		text-shadow: none;
	}
	.link {
		position: relative;
	}

	.link span {
		padding: 4px 10px;
		font-weight: bold;
		font-size: 10px;
		border-radius: 15px;
		color: #fff;
		background: #61178f;
		position: absolute;
		top: -14px;
		right: -24px;
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
		cursor: pointer;
	}
	button:hover {
		background: #178f71;
		color: #ebebeb;
	}
</style>
