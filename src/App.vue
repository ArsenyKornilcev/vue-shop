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
						text: "Main",
						name: "home",
					},
					{
						id: 1,
						text: "Page one",
						name: "pageOne",
					},
				],
			};
		},
		methods: {
			authorization(bool) {
				// this.$store.commit('authorization', bool)
				this.$store.dispatch("authorization/authenticate", bool);
				console.log(bool);
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
