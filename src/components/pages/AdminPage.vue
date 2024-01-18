<template>
	<div>
		<h2 class="text-center">This is an admin page</h2>

		<the-form
			@custom-submit="addProduct"
			resetBtnText="Reset"
			submitItemBtn="true"
			submitBtnText="Submit"
			:inputs="inputs"
			:textareas="textareas"></the-form>
	</div>
</template>
<script>
	import TheForm from "../layout/TheForm.vue";
	export default {
		name: "AdminPage",
		data() {
			return {
				inputs: [
					{
						id: "i1",
						label: "Title",
						type: "text",
						required: true,
					},
					{
						id: "i2",
						label: "Price",
						type: "number",
						required: true,
					},
					{
						id: 'i3',
						label: "Image URL",
						type: 'text',
						required: false,
					}
				],
				textareas: [
					{
						id: "t1",
						label: "Description",
					},
				],
			};
		},
		components: {
			TheForm,
		},
		methods: {
			addProduct() {
				alert("submitted");
			},
		},
	};
</script>
<style></style>
