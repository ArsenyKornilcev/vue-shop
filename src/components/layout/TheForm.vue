<template>
	<div>
		<form @submit.prevent>
			<div class="inputs">
				<div
					class="column"
					v-for="input in formInputs"
					:key="input.id">
					<label
						:class="{ error: input.errorMsg }"
						:for="input.id"
						v-if="input.label"
						>{{ input.label }}</label
					>

					<input
						:class="{ error: input.errorMsg }"
						:id="input.id"
						:type="input.type"
						:required="input.required"
						:value="input.value"
						:placeholder="input.placeholder"
						@input="inputProcess(input, $event)" />

					<div
						v-if="input.errorMsg"
						class="error">
						{{ input.errorMsg }}
					</div>
				</div>

				<div
					class="column"
					v-for="textarea in formTextareas"
					:key="textarea.id">
					<label
						:class="{ error: textarea.errorMsg }"
						:for="textarea.id"
						v-if="textarea.label"
						>{{ textarea.label }}</label
					>

					<textarea
						:class="{ error: textarea.errorMsg }"
						:id="textarea.id"
						:required="textarea.required"
						:value="textarea.value"
						:placeholder="textarea.placeholder"
						@input="inputProcess(textarea, $event)"></textarea>

					<div
						v-if="textarea.errorMsg"
						class="error">
						{{ textarea.errorMsg }}
					</div>
				</div>
			</div>

			<div class="buttons">
				<button
					class="btn btn_submit"
					type="button"
					@click="submit">
					{{ submitBtnText }}
				</button>

				<button
					class="btn btn_reset"
					type="reset"
					@click="reset"
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

		emits: ["custom-submit"],

		props: {
			inputs: Array,
			textareas: Array,
			resetBtnText: String,
			submitBtnText: String,
			validate: Function,
		},

		methods: {
			submit() {
				if (!this.validateAllInputFields()) {
					alert("Fill the input fields!");
					return;
				}

				this.$emit("custom-submit", [
					...this.formInputs,
					...this.formTextareas,
				]);
				this.reset();
			},

			reset() {
				for (let obj of [...this.formInputs, ...this.formTextareas]) {
					obj.value = "";
					obj.errorMsg = "";
				}
			},

			validateAllInputFields() {
				return (
					!this.voidValueInArrayCheck(this.formInputs) &&
					!this.voidValueInArrayCheck(this.formTextareas)
				);
			},

			voidValueInArrayCheck(array) {
				for (let inputField of array) {
					if (inputField.required && inputField.value === "") {
						return true;
					}
				}

				return false;
			},

			inputProcess(targetToFill, event) {
				targetToFill.value = event.target.value;

				this.validate(targetToFill);
			},
		},

		mounted() {
			this.formInputs = this.inputs.map((item) => ({ ...item }));
			this.formTextareas = this.textareas.map((item) => ({ ...item }));

			for (let input of this.formInputs) {
				input.value = "";
				input.errorMsg = "";
			}

			for (let textarea of this.formTextareas) {
				textarea.value = "";
				textarea.errorMsg = "";
			}
		},
	};
</script>

<style scoped lang="sass">
	.column
		display: flex
		flex-flow: column wrap
		gap: 5px

	.error
		color: #cf2e2e
		border-color: #cf2e2e

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
		transition: .3s ease

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
