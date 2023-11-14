<template>
	<the-section>
		<div class="card">
			<img
				:src="imgSrc"
				alt="" />

			<div class="card__text">
				<div class="card__title">
					{{ title }}
				</div>

				<span>${{ price }}</span>

				<div class="card__description">
					{{ description }}
				</div>

				<button @click="addItem(itemId)">Add to Cart</button>
			</div>
		</div>
	</the-section>
</template>
<script>
	import TheSection from "../layout/TheCard.vue";

	export default {
		name: "ProductCard",
		components: {
			TheSection,
		},
		props: {
			imgSrc: String,
			title: String,
			description: String,
			price: Number,
			itemId: String,
		},
		methods: {
			addItem(id) {
				this.$store.dispatch('cart/addItem', id)
			}
		}
	};
</script>
<style scoped>
	.card {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: 20px;
	}
	.card__text {
		display: flex;
		flex-flow: column wrap;
		gap: 10px;
	}
	.card__title {
		font-size: 18px;
		font-weight: bold;
	}
	span {
		border-radius: 15px;
		background: #f3dd32;
		padding: 4px 16px;
		font-weight: bold;
	}
	.card__description {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	img {
		display: block;
		max-width: 180px;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 15px;
	}
	button,
	span {
		width: fit-content;
	}
	button {
		margin-top: auto;
		padding: 8px 18px;

		border: none;
		border-radius: 15px;

		background: #591e98;
		color: #f3f3f3;
		font-weight: bold;
		transition: 0.3s ease;
		cursor: pointer;
	}
	button:hover {
		background: #6c25b7;
		color: #fff;
	}
	button:active {
		background: #4c1a83;
		color: #dddddd;
	}
</style>
