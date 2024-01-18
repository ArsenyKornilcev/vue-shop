<template>
	<section>
		<slot></slot>
	</section>
</template>
<script>
	export default {
		name: "TheCard",
	};
</script>
<style scoped>
	section {
		border-radius: 1rem;
		background: #fff;
		box-shadow: 0 2px 8px #d1d1d1;
		padding: 1rem;
	}
</style>
