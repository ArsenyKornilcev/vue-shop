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
					@click="submit"
					v-if="!submitItemBtn">
					{{ submitBtnText }}
				</button>
				<button
					@click="submitItem"
					v-else>
					{{ submitBtnText }}
				</button>
				<button
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
<style scoped>
	.column {
		display: flex;
		flex-flow: column wrap;
		gap: 5px;
	}
	.buttons {
		display: flex;
		gap: 10px;
	}

	.inputs {
		display: flex;
		flex-flow: column wrap;
		gap: 10px;
	}

	form .buttons {
		margin-top: 5px;
	}

	form {
		display: flex;
		flex-flow: column wrap;
		gap: 10px;
	}
</style>
