<template>
	<div>
		<h1 class="text-center">Your cart</h1>

		<div class="divider"></div>

		<p class="text-center">Total Amount: <span class="label">{{ total }}</span></p>

		<div class="cart-items">
			<cart-item
				v-for="item in items"
				:key="item.id"
				:title="item.title"
				:price="item.price"
				:img-src="item.image"></cart-item>
		</div>
	</div>
</template>
<script>
	import CartItem from "../items/CartItem.vue";

	export default {
		name: "CartPage",
		components: {
			CartItem,
		},
		computed: {
			items() {
				return this.$store.getters["cart/cartItems"];
			},
			total() {
				return this.$store.getters["cart/getTotalAmount"];
			},
		},
	};
</script>
<style scoped>
	.divider {
		height: 1px;
		width: 33%;
		margin: 0 auto;
		background: #222;
	}
	.cart-items {
		margin-top: 20px;
		padding: 0 1vw;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5vw;
	}

	p {
		font-weight: bold;
	}
</style>
