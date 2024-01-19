<template>
	<div class="">
		<label
			:for="id"
			v-if="label">
			{{ label }}
		</label>

		<textarea
			v-if="textarea"
			:class="{ 'field_error': errorMessage != '' }"
			:id="id"
			:type="type"
			:required="required"
			:placeholder="placeholder"
			v-model="value"
			@input="validate()" />

		<input
			v-else
			:class="{ 'field_error': errorMessage != '' }"
			:id="id"
			:type="type"
			:required="required"
			:placeholder="placeholder"
			v-model="value"
			@input="validate()" />

		<div class="error">
			{{ errorMessage }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "InputField",

		data() {
			return {
				value: "",
				errorMessage: "",
			};
		},

		props: {
			id: String,
			type: String,
			required: Boolean,
			placeholder: String,
			label: String,
			textarea: Boolean,
		},

		methods: {
			validate() {
				if (this.type === "number") {
					if (this.value.includes("e")) {
						this.errorMessage = "There should be only numbers";
					}
				}

				if (this.type === "text" && this.required && this.value === "") {
					this.errorMessage = "This field is required. Please, fill it."
				}

				this.errorMessage = "";
			},
		},
	};
</script>

<style lang="sass" scoped>
	div
		display: flex
		flex-flow: column wrap
		gap: 5px

	input, textarea
		padding: 8px 10px
		font-size: 15px
		font-weight: bold
		border-radius: 5px
		outline: none
		border: 1px solid #dadada

	.field_error
		border-color: #d02020

	.error
		color: #d02020
</style>
