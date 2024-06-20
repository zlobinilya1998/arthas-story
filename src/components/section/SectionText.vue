<template>
    <div class="section-history-text">
        <slot />
    </div>
</template>

<style lang="scss">
.section-history-text {
    margin-top: 10px;
    &::first-letter {
        color: var(--main-color);
        font-size: 1.5em;
        margin-left: 10px;
        font-family: "Folkard", sans-serif;
    }
}
</style>
