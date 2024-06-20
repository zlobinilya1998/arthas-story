<template>
    <div class="section-history-subtitle">
        <slot />
    </div>
</template>

<style lang="scss">
.section-history-subtitle {
    color: var(--accent-color);
    font-size: 1.75em;
    margin: 20px 0;
    line-height: 1.5;
    text-shadow: 1px 1px var(--secondary-color);
    font-family: "Warcraft", sans-serif;
    border-bottom: 1px solid var(--accent-color);
}
</style>
