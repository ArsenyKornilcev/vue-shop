<template>
	<section>
		<div class="section__title" :class="{ section__title_centered: isTitleCentered}">
			{{ sectionTitle }}
		</div>
		<div class="section__body">
			<slot></slot>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheSection",

		props: {
			sectionTitle: String,
			isTitleCentered: Boolean,
		},
	};
</script>

<style lang="sass" scoped>
	section
		padding: 50px 0
		
	.section__title
		margin-bottom: 30px
		font-size: 24px
		font-weight: bold
		&_centered
			text-align: center
</style>
