<template>
    <div class="section-history-img">
        <figure>
            <img :src="src" />
            <figcaption v-text="caption" />
            <SectionQuote v-if="$slots.default">
                <slot />
            </SectionQuote>
        </figure>
    </div>
</template>

<script setup>
import SectionQuote from "./SectionQuote.vue";
const props = defineProps({
    caption: String,
    src: String,
});
</script>

<style lang="scss">
.section-history-img {
    margin: 25px 0;
    overflow: hidden;
    &:hover {
        img {
            filter: sepia(15%);
        }
        .section-history-quote {
            opacity: 1;
            top: 0;
        }
    }
    img {
        outline: 1px solid var(--accent-color);
    }
    .section-history-quote {
        position: absolute;
        left: 0;
        right: 0;
        top: -100px;
        opacity: 0;
        letter-spacing: 0.1em;
    }
}
</style>
