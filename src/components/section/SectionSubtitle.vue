<template>
    <div class="section-history-subtitle">
        <slot />
    </div>
</template>

<style lang="scss">
.section-history-subtitle {
    color: var(--accent-color);
    font-size: 1.5em;
    margin: 20px 0;
    padding-left: 10px;
    line-height: 1.5;
    border-right: 2.5px solid var(--accent-color);
    text-shadow: 1px 1px var(--secondary-color);
    font-family: "Folkard", sans-serif;
}
</style>
