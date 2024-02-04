<template>
	<the-card>
		<div class="card">
			<img
				:src="imgSrc"
				alt="" />

			<div class="card__text">
				<div
					class="card__info"
					v-if="!edit">
					<div class="card__title">
						{{ title }}
					</div>

					<span>${{ price }}</span>

					<div class="card__description">
						{{ description }}
					</div>
				</div>

				<div
					class="card__info"
					v-else>
					<input
						type="text"
						v-model="itemTitle" />

					<input
						type="number"
						v-model="itemPrice" />

					<input
						type="text"
						v-model="itemImg" />

					<textarea v-model="itemDescription"> </textarea>
				</div>

				<button
					@click="addProduct"
					v-if="!edit">
					Add to Cart
				</button>

				<div
					class="btns"
					v-else>
					<button @click="editProduct">Edit</button>
					<button @click="deleteProduct">Delete</button>
				</div>
			</div>
		</div>
	</the-card>
</template>
<script>
	import TheCard from "../layout/TheCard.vue";

	export default {
		name: "ProductCard",

		components: {
			TheCard,
		},

		props: {
			itemId: String,
			imgSrc: String,
			title: String,
			description: String,
			price: Number,
			edit: Boolean,
		},

		mounted() {
			this.itemTitle = this.title;
			this.itemDescription = this.description;
			this.itemPrice = this.price;
			this.itemImg = this.imgSrc;
		},

		data() {
			return {
				itemTitle: "",
				itemDescription: "",
				itemPrice: 0,
				itemImg: "",
			};
		},

		methods: {
			addProduct() {
				const payload = { id: this.itemId };

				this.$store.dispatch("cart/addItem", payload);
			},

			editProduct() {
				const payload = {
					id: this.itemId,
					image: this.itemImg,
					title: this.itemTitle,
					description: this.itemDescription,
					price: this.itemPrice,
				};

				this.$store.dispatch("product/editProduct", payload);
			},

			deleteProduct() {
				const payload = {
					id: this.itemId,
				};

				this.$store.dispatch("product/deleteProduct", payload);
			},
		},
	};
</script>
<style lang="sass" scoped>
	.card
		display: grid
		grid-template-columns: min-content 1fr
		gap: 20px

	.card__text
		display: flex
		flex-flow: column wrap
		justify-content: space-between
		gap: 10px

	.card__info
		display: flex
		flex-flow: column wrap
		gap: 10px

	.card__title
		font-size: 18px
		font-weight: bold

	span
		border-radius: 15px
		background: #f3dd32
		padding: 4px 16px
		font-weight: bold

	.card__description
		overflow: hidden
		display: -webkit-box
		-webkit-line-clamp: 3
		line-clamp: 3
		-webkit-box-orient: vertical

	img
		display: block
		max-width: 180px
		width: 180px
		aspect-ratio: 1
		object-fit: cover
		border-radius: 15px

	.btns
		display: flex
		gap: 10px

	button,
	span
		width: fit-content

	button
		margin-top: auto
		padding: 8px 18px

		border: none
		border-radius: 15px

		background: #591e98
		color: #f3f3f3
		font-weight: bold
		transition: 0.3s ease
		cursor: pointer

	button:hover
		background: #6c25b7
		color: #fff

	button:active
		background: #4c1a83
		color: #dddddd

	input, textarea
		padding: 8px 10px
		font-size: 15px
		font-weight: bold
		border-radius: 5px
		outline: none
		border: 1px solid #dadada
		transition: .3s ease

	textarea
		max-width: 100%
		resize: vertical
		min-height: 100px
		max-height: 200px
</style>
