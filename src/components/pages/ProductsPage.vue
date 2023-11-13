<template>
    <div class="product-list">
        <product-card
		v-for="product in products"
		:key="product.id"
		:title="product.title"
        :description="product.description"
        :price="product.price"
        :img-src="product.image"></product-card>
    </div>
</template>

<script>
	import ProductCard from "../items/ProductCard.vue";

	export default {
		name: "ProductsPage",
		components: {
			ProductCard,
		},
		computed: {
			products() {
				return this.$store.getters["product/product"];
			},
		},
	};
</script>

<style scoped>
    .product-list {
        display: flex;
        flex-flow: column wrap;
        gap: 30px;
        width: 70%;
        margin: 0 auto;
    }
</style>
