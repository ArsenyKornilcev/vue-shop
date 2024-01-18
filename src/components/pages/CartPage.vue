<template>
	<div>
		<h1 class="text-center">Your cart</h1>

		<div class="divider"></div>

		<p class="text-center">
			Total Amount: <span class="label">${{ roundedTotal }}</span>
		</p>

		<div class="cart-items">
			<cart-item
				v-for="item in items"
				:key="item.id"
				:id="item.id"
				:title="item.title"
				:price="item.price"
				:img-src="item.image"
				:qty="item.quantity"></cart-item>
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
			roundedTotal() {
				const total = this.$store.getters["cart/getTotalAmount"];
				let fixedTotal = total.toFixed(2);
				console.log(total)
				console.log(fixedTotal)

				if (total < 0) {
					fixedTotal = 0;
				}

				return fixedTotal;
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
