<template>
	<div>
		<the-header
			:brand-name="brandName"
			:links="links"
			@auth="authorization">
		</the-header>
		<main>
			<the-container>
				<router-view v-slot="{ Component }">
					<transition
						name="fade"
						mode="out-in">
						<component :is="Component" />
					</transition>
				</router-view>
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
						name: "products",
						auth: false,
					},
					{
						id: 1,
						text: "Cart",
						name: "cart",
						auth: false,
						count: 0,
					},
					{
						id: 2,
						text: "Admin",
						name: "admin",
						auth: true,
					},
				],
			};
		},
		methods: {
			authorization(bool) {
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

	.text-center {
		text-align: center;
	}
	h1 {
		font-size: 30px;
		color: rgb(56, 159, 116);
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: scale(0.5);
	}
	body::-webkit-scrollbar {
		width: 0;
	}
</style>
