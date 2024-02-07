<template>
	<button
		:type="type"
		:class="{
			positive: positive,
			negative: negative,
			neutral: neutral,
			rounded: rounded,
			fluid: fluid,
		}">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "TheButton",
		props: {
			text: String,
			type: String,
			positive: Boolean,
			negative: Boolean,
			neutral: Boolean,
			rounded: Boolean,
			fluid: Boolean,
		},
	};
</script>

<style lang="sass" scoped>
	button
		border-radius: 5px
		padding: 8px 14px
		font-weight: bold
		font-size: 16px
		transition: 0.3s ease
		border: none
		cursor: pointer
		outline: none

		&.fluid
			width: 100%

		&.rounded
			border-radius: 15px

		&.positive
			color: #f4f4f4
			background: #1cad88

			&:hover
				background: #1eb892
				color: #fff

			&:active
				color: #ebebeb
				background: #178f71

		&.negative
			background: #3b3b3b
			color: #f4f4f4

			&:hover
				color: #fff
				background: #454545

			&:active
				color: #f0f0f0
				background: #404040
</style>
