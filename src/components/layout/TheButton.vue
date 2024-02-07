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
		{{ text }}
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
		min-width: 95px

		&.positive
			color: #f4f4f4
			background: #1cad88

			&:hover
				background: #1eb892
				color: #fff

			&:active
				color: #ebebeb
				background: #178f71
</style>
