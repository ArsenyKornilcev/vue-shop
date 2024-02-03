<template>
    <section class="section">
        <div class="section__title" :class="{ 'section__title_centered': centeredTitle }">
            {{  title }}
        </div>
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: "TheSection",
    props: {
        title: String,
        centeredTitle: Boolean,
    }
}
</script>

<style lang="sass" scoped>
    .section
        padding: 50px 0

        &__title
            font-size: 20px
            font-weight: bold
            margin-bottom: 20px

            &_centered
                text-align: center
</style>