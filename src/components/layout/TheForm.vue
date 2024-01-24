<template>
	<div>
		<form
			@submit.prevent
			ref="form">
			<div class="inputs">
				<input-field
					v-for="input in formInputs"
					:key="input.id"
					:label="input.label"
					:id="input.id"
					:type="input.type"
					:required="input.required"
					:placeholder="input.placeholder"
					:validate="validate"
					@custom-input="
						customInputProcess(input, $event)
					"></input-field>

				<input-field
					v-for="textarea in formTextareas"
					:textarea="true"
					:key="textarea.id"
					:label="textarea.label"
					:id="textarea.id"
					:required="textarea.required"
					:placeholder="textarea.placeholder"
					:validate="validate"
					@custom-input="
						customInputProcess(textarea, $event)
					"></input-field>
			</div>

			<div class="buttons">
				<button
					class="btn btn_submit"
					type="button"
					:disabled="!canSend"
					@click="submit"
					v-if="!submitItemBtn">
					{{ submitBtnText }}
				</button>

				<button
					class="btn btn_submit"
					type="button"
					:disabled="!canSend"
					@click="submitItem"
					v-else>
					{{ submitBtnText }}
				</button>

				<button
					class="btn btn_reset"
					type="reset"
					@click="clearInputFields"
					v-if="resetBtnText">
					{{ resetBtnText }}
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import InputField from "./InputField.vue";

	export default {
		name: "TheForm",

		components: {
			InputField,
		},

		data() {
			return {
				formInputs: [],
				formTextareas: [],
				errors: 0,
			};
		},

		props: {
			inputs: Array,
			textareas: Array,
			resetBtnText: String,
			submitBtnText: String,
			submitItemBtn: Boolean, // if defined form will provide item on submit action
			validate: Function,
		},

		methods: {
			submitItem() {
				let newProduct = [...this.formInputs, ...this.formTextareas];

				// this.trimInputFields();

				this.$emit("custom-submit", newProduct);

				this.clearInputFields();
			},

			submit() {
				this.$emit("custom-submit");

				this.clearInputFields();
			},

			customInputProcess(fieldForFillIn, event) {
				fieldForFillIn.value = event.value;
				console.log(event);
			},

			clearInputFields() {
				this.clearObjectValues(this.formInputs);
				this.clearObjectValues(this.formTextareas);

				this.errors = 0;

				this.$refs.form.reset();
			},

			trimInputFields() {
				this.trimObjectValues(this.formInputs);
				this.trimObjectValues(this.formTextareas);
			},

			trimObjectValues(array) {
				for (let obj of array) {
					obj.value = obj.value.toString().trim();
				}
			},

			clearObjectValues(array) {
				for (let obj of array) {
					obj.value = "";
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

		computed: {
			canSend() {
				return this.errors === 0;
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
		position: relative
		z-index: 1
		overflow: hidden

		&:disabled
			&::after
				position: absolute
				display: block
				content: ''
				width: 100%
				height: 100%
				z-index: 2
				background: rgba(0, 0, 0, .3)
				top: 0
				left: 0

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

	form
		display: flex
		flex-flow: column wrap
		gap: 10px
		max-width: 400px
		margin: 0 auto

		.buttons
			margin-top: 5px
</style>
