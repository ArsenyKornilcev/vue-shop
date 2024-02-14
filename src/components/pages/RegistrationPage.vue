<template>
	<the-panel>
		<div class="content">
			<h2 class="text-center">Registration</h2>

			<the-form
				:inputs="fields"
				submit-btn-text="Sign Up"
				:validate="validateForm"
				fluid-btns>
			</the-form>

			<div class="after">
				<p>Already have an account?</p>
				<router-link :to="{ name: 'auth' }">Sign in</router-link>
			</div>
		</div>
	</the-panel>
</template>

<script>
	import ThePanel from "../layout/ThePanel.vue";
	import TheForm from "../layout/TheForm.vue";

	export default {
		name: "RegistrationPage",

		components: {
			ThePanel,
			TheForm,
		},

		data() {
			return {
				fields: [
					{
						id: "i1",
						placeholder: "Login",
						type: "text",
						required: true,
						name: "login",
					},
					{
						id: "i2",
						placeholder: "Password",
						type: "password",
						required: true,
						name: "password",
					},
					{
						id: "i3",
						placeholder: "Repeat password",
						type: "password",
						required: true,
						name: "password-repeat",
					},
				],
			};
		},

		methods: {
			validateForm(inputField) {
				if (inputField.required && inputField.value === "") {
					inputField.errorMsg = "Please, fill this input field.";

					return;
				}

				// make more validation rules

				inputField.errorMsg = "";
			},
		},
	};
</script>

<style lang="sass" scoped>
	.after
		display: flex
		justify-content: center
		align-items: center
		gap: 10px

		a
			font-weight: bold
			color: #61178f
			text-decoration: none
</style>
