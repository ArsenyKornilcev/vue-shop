<template>
	<div class="page">
		<h2 class="text-center">This is an admin page</h2>

		<the-form
			@custom-submit="addProduct($event)"
			resetBtnText="Reset"
			:submitItemBtn="true"
			submitBtnText="Submit"
			:inputs="inputs"
			:textareas="textareas"
			:validate="validate"></the-form>

		<the-section section-title="Products">
			<product-list class="product-list"></product-list>
		</the-section>
	</div>
</template>
<script>
	import TheForm from "../layout/TheForm.vue";
	import ProductList from "@/components/lists/ProductList";
	import TheSection from "../layout/TheSection.vue";

	export default {
		name: "AdminPage",

		components: {
			TheForm,
			ProductList,
			TheSection
		},

		data() {
			return {
				inputs: [
					{
						id: "i1",
						label: "Title",
						type: "text",
						required: true,
						name: "title",
					},
					{
						id: "i2",
						label: "Price",
						type: "number",
						required: true,
						name: "price",
					},
					{
						id: "i3",
						label: "Image URL",
						type: "text",
						required: false,
						name: "image",
					},
				],
				textareas: [
					{
						id: "t1",
						label: "Description",
						name: "description",
					},
				],
			};
		},

		methods: {
			addProduct(product) {
				console.log(product);

				let allProducts = this.$store.getters["product/allProducts"];

				let lastProductNumber = allProducts.at(-1).id.slice(1);

				let id = "p" + (parseInt(lastProductNumber) + 1);

				let newProduct = {
					id: id,
					image: null,
					title: null,
					description: null,
					price: null,
				};

				for (let obj of product) {
					if (obj.name === "price") {
						newProduct[obj.name] = parseFloat(obj.value);
						continue;
					}

					newProduct[obj.name] = obj.value;
				}

				this.$store.dispatch("product/addProduct", newProduct);
			},

			validate(context) {
				if (context.type === "number" && context.value < 0) {
					context.errorMessage = "Price should be a positive number.";

					return;
				}

				if (context.required && context.value === "") {
					context.errorMessage =
						"This field is required. Please, fill it.";

					return;
				}

				context.errorMessage = "";
				context.$emit("validate", context.value);
			},
		},
	};
</script>
<style lang="sass" scoped>
	.product-list
		margin-top: 100px
</style>
