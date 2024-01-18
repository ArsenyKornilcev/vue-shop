<template>
	<div>
		<form @submit.prevent>
			<div class="inputs">
				<div
					class="column"
					v-for="input in inputs"
					:key="input.id">
					<label
						:for="input.id"
						v-if="input.label"
						>{{ input.label }}</label
					>
					<input
						:id="input.id"
						:type="input.type"
						:required="input.required"
						:placeholder="input.placeholder" />
				</div>
				<div
					class="column"
					v-for="textarea in textareas"
					:key="textarea.id">
					<label
						:for="textarea.id"
						v-if="textarea.label"
						>{{ textarea.label }}</label
					>
					<textarea
						:id="textarea.id"
						:placeholder="textarea.placeholder"></textarea>
				</div>
			</div>

			<div class="buttons">
				<button
					class="btn btn_submit"
					@click="submit"
					v-if="!submitItemBtn">
					{{ submitBtnText }}
				</button>
				<button
					class="btn btn_submit"
					@click="submitItem"
					v-else>
					{{ submitBtnText }}
				</button>
				<button
					class="btn btn_reset"
					type="reset"
					v-if="resetBtnText">
					{{ resetBtnText }}
				</button>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				newProduct: null,
			};
		},
		props: {
			inputs: Array,
			textareas: Array,
			resetBtnText: String,
			submitBtnText: String,
			submitItemBtn: Boolean, // if defined form will provide item on submit action
		},
		methods: {
			submitItem() {
				this.newProduct = {
					...this.inputs,
					...this.textareas,
				};
				this.$emit("custom-submit", this.newProduct);
			},
			submit() {
				this.$emit("custom-submit");
			},
		},
	};
</script>
<style scoped lang="sass">
	.column
		display: flex
		flex-flow: column wrap
		gap: 5px

	.buttons
		display: flex
		gap: 10px

	.btn
		padding: 8px 12px
		font-weight: bold
		border-radius: 10px
		border: none
		cursor: pointer
		color: #fff

		&_submit
			background: #288c48

			&:hover
				background: #2c9a4f
			&:active
				background: #288c48
		&_reset
			background: #882727

			&:hover 
				background: #9a2c2c
			&:active 
				background: #882727
	

	.inputs
		display: flex
		flex-flow: column wrap
		gap: 10px

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


	form
		display: flex
		flex-flow: column wrap
		gap: 10px
		max-width: 400px
		margin: 0 auto

		.buttons
			margin-top: 5px
</style>
