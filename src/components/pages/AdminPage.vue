<template>
	<div>
		<h2 class="text-center">This is an admin page</h2>

		<the-form
			@custom-submit="addProduct($event)"
			resetBtnText="Reset"
			:submitItemBtn="true"
			submitBtnText="Submit"
			:inputs="inputs"
			:textareas="textareas"></the-form>
	</div>
</template>
<script>
	import TheForm from "../layout/TheForm.vue";

	export default {
		name: "AdminPage",

		components: {
			TheForm,
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
		},
	};
</script>
<style></style>
