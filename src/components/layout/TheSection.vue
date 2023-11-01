<template>
	<section>
		<slot></slot>
	</section>
</template>
<script>
	export default {
        name: 'TheSection'
    };
</script>
<style scoped>
    section {
        border-radius: 1rem;
        background: #fff;
        box-shadow: 0 2px 8px #868686;
        padding: 1rem;
    }
</style>
