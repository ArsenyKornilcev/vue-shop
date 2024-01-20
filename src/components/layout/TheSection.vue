<template>
	<section>
		<div class="section__title">
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
		},
	};
</script>

<style lang="sass">
	section
		padding: 30px 0
		
	.section__title
		margin-bottom: 30px
		font-size: 24px
		font-weight: bold
</style>
