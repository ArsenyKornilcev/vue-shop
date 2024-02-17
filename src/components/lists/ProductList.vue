<template>
	<div class="products">
		<div
			class="search"
			v-if="search">
			<input
				type="text"
				v-model="searchInput" />

			<the-button
				positive
				rounded
				>Search</the-button
			>
		</div>

		<div class="products__list">
			<product-card
				v-for="product in filteredProducts"
				:edit="edit"
				:key="product.id"
				:item-id="product.id"
				:title="product.title"
				:description="product.description"
				:price="product.price"
				:img-src="product.image"></product-card>
		</div>
	</div>
</template>

<script>
	import ProductCard from "@/components/items/ProductCard";

	export default {
		name: "ProductList",

		components: {
			ProductCard,
		},

		props: {
			edit: Boolean,
			search: Boolean,
		},

		data() {
			return {
				searchInput: "",
			};
		},

		computed: {
			products() {
				return this.$store.getters["product/allProducts"];
			},

			filteredProducts() {
				return this.products.filter((product) =>
					product.title
						.toLowerCase()
						.includes(this.searchInput.trim().toLowerCase())
				);
			},
		},
	};
</script>

<style lang="sass" scoped>
	.search
		margin-bottom: 40px
		display: flex
		gap: 10px

		input
			width: 100%
			border-radius: 15px
			padding: 8px 12px
			border: 1px solid #222
			font-size: 18px
			outline: none

	.products
		max-width: 800px
		margin: 0 auto

		&__list
			display: flex
			flex-flow: column wrap
			gap: 30px
</style>
