<template>
	<div>
		<h2 class="text-center">This is admin page</h2>

		<the-form
		@submit="addProduct"
		></the-form>
	</div>
</template>
<script>
	import TheForm from "../layout/TheForm.vue";
	export default {
		name: "AdminPage",
		components: {
			TheForm,
		},
		methods: {
			addProduct() {

			}
		}
	};
</script>
<style></style>
