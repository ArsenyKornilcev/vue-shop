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
						name="fade-scale"
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
						counter: true,
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
		font-family: sans-serif;
	}
	body {
		margin: 0;
		background: rgb(246, 246, 249);
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

	.fade-scale-enter-active,
	.fade-scale-leave-active {
		transition: all 0.5s ease;
	}

	.fade-scale-enter-from,
	.fade-scale-leave-to {
		opacity: 0;
		transform: scale(0.5);
	}
	body::-webkit-scrollbar {
		width: 0;
	}

	.label {
		padding: 4px 18px;
		font-weight: bold;
		font-size: 16px;
		border-radius: 15px;
		color: #fff;
		background: #61178f;
	}

	.label_small {
		padding: 4px 10px;
		font-size: 10px;
	}
</style>
