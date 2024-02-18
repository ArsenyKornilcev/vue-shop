<template>
	<div>
		<h1>{{ currentProductId }}</h1>
	</div>
</template>

<script>
	export default {
		name: "ProductPage",

		computed: {
			allProduct() {
				return this.$store.getters["product/allProducts"];
			},

			currentProduct() {
				return this.allProduct.find(
					(product) => product.id === this.currentProductId
				);
			},

			currentProductId() {
				return this.$route.params.id;
			},
		},
	};
</script>

<style lang="sass" scoped></style>
