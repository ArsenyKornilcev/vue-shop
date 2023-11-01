<template>
	<div>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: "TheContainer",
	};
</script>
<style scoped>
	div {
		margin: 0 auto;
		max-width: 1200px;
	}
</style>
