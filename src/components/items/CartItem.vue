<template>
	<the-card>
		<div class="img">
			<img :src="imgSrc" />
			<h2>{{ title }}</h2>
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
			<button
				class="btn_add"
				@click="add">
				Add
			</button>
			<button
				class="btn_remove"
				@click="remove">
				Remove
			</button>
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

<style scoped>
	.img {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 20px;
		align-items: center;
		margin-bottom: 25px;
	}
	img {
		display: block;
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	h2 {
		margin: 0;
	}
	span {
		font-weight: bold;
	}
	.info {
		display: flex;
		justify-content: space-between;
	}
	.info p {
		margin: 0;
	}
	.total {
		border-top: 2px solid #222;
		border-bottom: 2px solid #222;
		padding: 5px 0;
	}
	.btns {
		display: flex;
		gap: 10px;
		justify-content: flex-end;
	}
	.btns button {
		padding: 4px 16px;
		border: none;
		border-radius: 15px;
		font-weight: bold;
		color: #e8e8e8;
		cursor: pointer;
		transition: 0.3s ease;
	}
	.btns button:hover {
		color: #fff;
	}
	.btns button:active {
		color: #e8e8e8;
	}
	.btn_add {
		background: #288c48;
	}
	.btn_add:hover {
		background: #2c9a4f;
	}
	.btn_add:active {
		background: #288c48;
	}
	.btn_remove {
		background: #882727;
	}
	.btn_remove:hover {
		background: #9a2c2c;
	}
	.btn_remove:active {
		background: #882727;
	}
</style>
