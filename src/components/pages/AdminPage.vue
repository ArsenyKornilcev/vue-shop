<template>
	<div>
		<h2>This is an admin page</h2>

		<the-section
			title="Add new product"
			:centeredTitle="true">
			<div>
				<the-form
					@custom-submit="addProduct($event)"
					:validate="validateForm"
					resetBtnText="Reset"
					submitBtnText="Submit"
					:inputs="inputs"
					:textareas="textareas"></the-form>
			</div>
		</the-section>

		<the-section
			title="All products"
			:centeredTitle="true">
			<div>
				<product-list edit></product-list>
			</div>
		</the-section>
	</div>
</template>
<script>
	import TheForm from "../layout/TheForm.vue";
	import TheSection from "@/components/layout/TheSection";
	import ProductList from "@/components/lists/ProductList";

	export default {
		name: "AdminPage",

		components: {
			TheForm,
			TheSection,
			ProductList,
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
				let allProducts = this.$store.getters["product/allProducts"];
				let lastProductNumber = 0;

				if (allProducts.length !== 0) {
					lastProductNumber = allProducts.at(-1).id.slice(1);
				}

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

			validateForm(inputField) {
				if (inputField.required && inputField.value === "") {
					inputField.errorMsg = "Please, fill this input field.";

					return;
				}

				if (inputField.type === "number" && inputField.value < 0) {
					inputField.errorMsg = "Price should be a positive number.";

					return;
				}

				inputField.errorMsg = "";
			},
		},
	};
</script>
<style></style>
