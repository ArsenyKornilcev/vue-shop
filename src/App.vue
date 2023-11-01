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
				brandName: "Brand",
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
			authorization(event) {
				// this.$store.commit('authorization', event)
				this.$store.dispatch("authorization/authenticate", event);
				console.log(event);
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
