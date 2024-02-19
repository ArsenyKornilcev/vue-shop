<template>
	<the-card>
		<div>
			<div class="row">
				<div class="column column_img">
					<img
						class="product__img"
						:src="currentProduct.image"
						alt="" />
				</div>

				<div class="column column_text">
					<div class="product__title">
						{{ currentProduct.title }}
					</div>

					<div class="product__description">
						{{ currentProduct.description }}
					</div>

					<div class="product__price">
						<span>${{ currentProduct.price }}</span>
					</div>

					<div class="btns">
						<the-button
							positive-secondary
							rounded
							@click="addProduct">
							Add to Cart
						</the-button>
					</div>
				</div>
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

<style lang="sass" scoped>
	.row
		display: grid
		grid-template-columns: 6fr 4fr
		gap: 20px
		justify-content: center

	.column
		img
			width: 100%
			object-fit: cover
			border-radius: 15px
			display: block

		&_text
			display: flex
			flex-flow: column wrap
			gap: 10px

	.product
		&__title
			color: #1cad88
			font-weight: bold
			font-size: 24px

	span
		border-radius: 15px
		background: #f3dd32
		padding: 4px 16px
		font-weight: bold

	.btns
		margin-top: 10px
</style>
