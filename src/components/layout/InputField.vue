<template>
	<div class="container">
		<label
			:class="{ field_error: isError }"
			:for="id"
			v-if="label">
			{{ label }}
		</label>

		<textarea
			v-if="textarea"
			:class="{ field_error: isError }"
			:id="id"
			:type="type"
			:required="required"
			:placeholder="placeholder"
			v-model="value"
			@keyup="input" />

		<input
			v-else
			:class="{ field_error: isError }"
			:id="id"
			:type="type"
			:required="required"
			:placeholder="placeholder"
			v-model="value"
			@keyup="input" />

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
			validate: Function,
		},

		methods: {
			input() {
				const response = {
					error: this.isError,
					value: this.value,
					id: this.id,
				};
				
				this.$emit("custom-input", response);
				this.validate(this);
			},
		},
		
		computed: {
			isError() {
				return this.errorMessage !== "";
			},
		},
	};
</script>

<style lang="sass" scoped>
	.container
		display: flex
		flex-flow: column wrap
		gap: 5px

	label
		font-weight: 600
		margin-left: 5px
		transition: .3s ease
		color: #737373

	input, textarea
		padding: 8px 10px
		font-size: 15px
		font-weight: bold
		border-radius: 5px
		outline: none
		border: 1px solid #dadada

	textarea
		max-width: 100%
		resize: vertical
		min-height: 100px
		max-height: 200px

	.field_error
		border-color: #d02020
		color: #d02020

	.error
		color: #d02020
		margin-top: 2px
</style>
