<template>
	<div>
		<form @submit.prevent>
			<div class="inputs">
				<input-field
					v-for="input in formInputs"
					:key="input.id"
					:label="input.label"
					:id="input.id"
					:type="input.type"
					:required="input.required"
					:placeholder="input.placeholder"></input-field>

				<input-field
					v-for="textarea in formTextareas"
					:textarea=true
					:key="textarea.id"
					:label="textarea.label"
					:id="textarea.id"
					:required="textarea.required"
					:placeholder="textarea.placeholder"></input-field>
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
				let newProduct = [...this.formInputs, ...this.formTextareas];

				if (this.validate()) {
					this.$emit("custom-submit", newProduct);
				}

				for (let obj of newProduct) {
					obj.value = "";
				}
			},

			submit() {
				if (this.validate()) {
					this.$emit("custom-submit");
				}
			},

			validate() {
				for (let input in this.formInputs) {
					if (
						input.type === "text" &&
						input.required === true &&
						input.value === ""
					) {
						return true;
					}
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

	form
		display: flex
		flex-flow: column wrap
		gap: 10px
		max-width: 400px
		margin: 0 auto

		.buttons
			margin-top: 5px
</style>
