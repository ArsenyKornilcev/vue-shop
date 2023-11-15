<template>
	<div>
		<form @submit="submit">
			<div
				class="column"
				v-for="input in inputs"
				:key="input.id">
				<label :for="input.id">{{ input.label }}</label>
				<input
					:id="input.id"
					:type="input.type"
					:placeholder="input.placeholder" />
			</div>
			<div
				class="column"
				v-for="textarea in textareas"
				:key="textarea.id">
				<label :for="textarea.id">{{ textarea.label }}</label>
				<textarea
					:id="textarea.id"
					:placeholder="textarea.placeholder"></textarea>
			</div>

			<div class="buttons">
				<button>{{ submitBtnText }}</button>
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
		props: {
			inputs: Array,
			textareas: Array,
			resetBtnText: String,
			submitBtnText: String,
		},
		methods: {
			submit() {
				// this.$emit("submit", newProduct);
			},
		},
	};
</script>
<style scoped>
	.column {
		display: flex;
		flex-flow: column wrap;
	}
	.buttons {
		display: flex;
		gap: 10px;
	}
</style>
