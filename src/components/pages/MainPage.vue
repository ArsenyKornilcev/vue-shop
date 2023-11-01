<template>
    <h2>Main page</h2>

	<the-section>
        <h3>This is a main page</h3>
        <p>It is a description for this section</p>
    </the-section>
</template>

<script>
	import TheSection from "@/components/layout/TheSection";
	export default {
		name: "MainPage",
        components: {
            TheSection
        }
	};
</script>

<style scoped>
    h2 {
        text-align: center;
        font-size: 30px;
        color: #4e4e4e;
    }
</style>
