<template>
	<the-card>
		<div>
			<img
				class="product__img"
				:src="currentProduct.image"
				alt="" />
			<div class="product__title">{{ currentProduct.title }}</div>
			<div class="product__description">
				{{ currentProduct.description }}
			</div>
			<div class="product__price">{{ currentProduct.price }}</div>

			<div class="btns">
				<the-button
					positive-secondary
					rounded
					@click="addProduct">
					Add to Cart
				</the-button>
			</div>
		</div>
	</the-card>
</template>

<script>
	import TheCard from "../layout/TheCard.vue";

	export default {
		name: "ProductPage",

		components: {
			TheCard,
		},

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

		methods: {
			addProduct() {
				const payload = { id: this.currentProduct.id };

				this.$store.dispatch("cart/addItem", payload);
			},
		},
	};
</script>

<style lang="sass" scoped></style>
