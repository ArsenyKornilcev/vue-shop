<template>
	<div class="panel">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "ThePanel",
	};
</script>

<style lang="sass" scoped>
	.panel
		border-radius: 30px
		background: #fff
		padding: 30px
		margin: 0 auto
		max-width: 400px

</style>
