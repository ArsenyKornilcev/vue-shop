<template>
	<div>
		<the-section title="Products" centered-title>
			<product-list></product-list>
		</the-section>
	</div>
</template>

<script>
	import ProductList from "@/components/lists/ProductList";
	import TheSection from "../layout/TheSection.vue";

	export default {
		name: "ProductsPage",
		components: {
			ProductList,
			TheSection,
		},
	};
</script>

<style></style>
