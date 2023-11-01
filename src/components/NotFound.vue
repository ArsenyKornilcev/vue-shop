<template>
	<div>
		<h2>Not found!</h2>
		<router-link :to="{ name: 'home' }">Home</router-link>
	</div>
</template>

<script>
	export default {
		name: "NotFound",
	};
</script>

<style></style>
