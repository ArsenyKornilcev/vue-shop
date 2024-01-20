<template>
	<div class="product-list">
		<product-card
			v-for="product in products"
			:key="product.id"
			:item-id="product.id"
			:title="product.title"
			:description="product.description"
			:price="product.price"
			:img-src="product.image"></product-card>
	</div>
</template>

<script>
	import ProductCard from "@/components/items/ProductCard";

	export default {
		name: "ProductList",

		components: {
			ProductCard,
		},
		
		computed: {
			products() {
				return this.$store.getters["product/allProducts"];
			},
		},
	};
</script>

<style lang="sass" scoped>
	.product-list
		display: flex
		flex-flow: column wrap
		gap: 25px
		width: 70%
		margin: 0 auto
</style>
