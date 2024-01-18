<template>
	<div>
		<form @submit.prevent>
			<div class="inputs">
				<div
					class="column"
					v-for="input in formInputs"
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
						:value="input.value"
						:placeholder="input.placeholder"
						@input="input.value = $event.target.value" />
				</div>

				<div
					class="column"
					v-for="textarea in formTextareas"
					:key="textarea.id">
					<label
						:for="textarea.id"
						v-if="textarea.label"
						>{{ textarea.label }}</label
					>
					<textarea
						:id="textarea.id"
						:required="textarea.required"
						:value="textarea.value"
						:placeholder="textarea.placeholder"
						@input="
							textarea.value = $event.target.value
						"></textarea>
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
		name: "TheForm",

		data() {
			return {
				formInputs: [],
				formTextareas: [],
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
				let newProduct = [
					...this.formInputs,
					...this.formTextareas,
				];

				// if (this.validate(newProduct)) {
					this.$emit("custom-submit", newProduct);
				// }

				for (let obj of newProduct) {
					obj.value = "";
				}
			},

			submit() {
				this.$emit("custom-submit");
			},

			validate(item = null) {
				if (item) {
					for (let prop in item) {
						if (
							prop.type === "text" &&
							prop.required === true &&
							prop.value === ""
						) {
							return true;
						}
					}
				} else {
					return false;
				}
			},
		},

		mounted() {
			this.formInputs = this.inputs.map((item) => ({ ...item }));
			this.formTextareas = this.textareas.map((item) => ({ ...item }));

			for (let input of this.formInputs) {
				input["value"] = "";
			}

			for (let textarea of this.formTextareas) {
				textarea["value"] = "";
			}
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
