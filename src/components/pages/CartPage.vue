<template>
	<div>
		<h1 class="text-center">Your cart</h1>

		<div class="divider"></div>

		<p class="text-center">Total Amount: <span class="label">0</span></p>

		<div class="cart-items">
			<cart-item></cart-item>
		</div>
	</div>
</template>
<script>
	import CartItem from '../custom/CartItem.vue';

	export default {
		name: "CartPage",
		components: {
			CartItem
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
