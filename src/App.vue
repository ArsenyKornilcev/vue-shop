<template>
	<div>
		<the-header
			:brand-name="brandName"
			:links="links"
			@auth="authorization">
		</the-header>
		<main>
			<the-container>
				<router-view></router-view>
			</the-container>
		</main>
	</div>
</template>

<script>
	import TheHeader from "@/components/layout/TheHeader";
	import TheContainer from "@/components/layout/TheContainer";

	export default {
		name: "App",
		components: {
			TheHeader,
			TheContainer,
		},
		data() {
			return {
				brandName: "VueShop",
				links: [
					{
						id: 0,
						text: "Products",
						name: "home",
						auth: false,
					},
					{
						id: 1,
						text: "Cart",
						name: "pageOne",
						auth: false,
					},
					{
						id: 2,
						text: "Admin",
						name: "pageOne",
						auth: true,
					},
				],
			};
		},
		methods: {
			authorization(bool) {
				// this.$store.commit('authorization', bool)
				this.$store.dispatch("authorization/authenticate", bool);
			},
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
	}
	html {
		font-family: sans-serif;
	}
	main {
		padding: 50px 0 80px;
	}
</style>
