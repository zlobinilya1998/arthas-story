<template>
    <div class="section-history-quote">
        <slot />
    </div>
</template>

<style lang="scss">
.section-history-quote {
    border-left: 5px solid var(--main-color);
    background-color: var(--main-color-clear);
    padding: 10px;
    padding-right: 40px;
    transition: 0.3s;
}
</style>
