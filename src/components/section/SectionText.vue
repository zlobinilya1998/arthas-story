<template>
    <div class="section-history-text" :class="{paragraph}">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    paragraph: Boolean,
});
</script>

<style lang="scss">
.section-history-text {
    margin-top: 10px;
    font-size: 1.5em;
    font-family: "Akaya", sans-serif;
    &.paragraph {
        &::first-letter {
            color: var(--main-color);
            font-size: 1.5em;
            margin-left: 10px;
            line-height: 1;
            font-family: "Folkard", sans-serif;
        }
    }
}
</style>
