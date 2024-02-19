<template>
	<the-card class="cart-item">
		<div class="img">
			<img :src="imgSrc" />
			<h2>{{ title }}</h2>
			<router-link
				:to="{ name: 'product', params: { id: id } }"></router-link>
		</div>

		<div class="info">
			<p>
				Price per item: <span>${{ price }}</span>
			</p>
			<p>
				Quantity: <span>{{ qty }}</span>
			</p>
		</div>

		<p class="total text-center">
			Total: <span>${{ totalPrice }}</span>
		</p>

		<div class="btns">
			<the-button
				positive
				rounded
				fluid
				@click="add">
				Add
			</the-button>
			<the-button
				negative
				rounded
				fluid
				@click="remove">
				Remove
			</the-button>
		</div>
	</the-card>
</template>

<script>
	import TheCard from "../layout/TheCard.vue";

	export default {
		name: "CartItem",
		components: {
			TheCard,
		},
		props: {
			title: String,
			price: Number,
			imgSrc: String,
			id: String,
			qty: Number,
		},
		computed: {
			totalPrice() {
				const total = this.price * this.qty;
				const roundedTotal = total.toFixed(2);
				return roundedTotal;
			},
		},
		methods: {
			add() {
				const payload = { id: this.id };
				this.$store.dispatch("cart/addItem", payload);
			},
			remove() {
				const payload = { id: this.id };
				this.$store.dispatch("cart/removeItem", payload);
			},
		},
	};
</script>

<style lang="sass" scoped>
	.cart-item 
		width: 300px
	
	.img 
		display: grid
		grid-template-columns: 100px 1fr
		gap: 20px
		align-items: center
		margin-bottom: 25px
		position: relative

		a
			z-index: 3
			position: absolute
			width: 100%
			height: 100%
			top: 0
			left: 0
	
	img 
		display: block
		width: 100px
		height: 100px
		border-radius: 50%
	
	h2 
		margin: 0
	
	span 
		font-weight: bold
	
	.info 
		display: flex
		justify-content: space-between
	
	.info p 
		margin: 0
	
	.total 
		border-top: 2px solid #222
		border-bottom: 2px solid #222
		padding: 5px 0
	
	.btns 
		display: flex
		gap: 10px
		justify-content: flex-end
	
</style>
