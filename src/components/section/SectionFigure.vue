<template>
    <div class="section-history-img" :class="{ bordered }">
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
    bordered: Boolean,
});
</script>

<style lang="scss">
.section-history-img {
    margin: 25px 0;
    overflow: hidden;
    &.bordered {
        margin: 20px;
        margin-bottom: 0;
    }
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
        transition: 0.3s;
        outline: 1px solid transparent;
    }
    .section-history-quote {
        position: absolute;
        left: 0;
        right: 0;
        top: -100px;
        opacity: 0;
        letter-spacing: 0.1em;
    }

    figcaption {
        position: absolute;
        bottom: 20px;
        left: 20px;
        opacity: 0;
        transition: 0.3s;
        font-size: 2em;
        text-align: center;
        text-shadow: gold 1px 0 10px;
        font-family: "Folkard", sans-serif;
    }

    figure:hover figcaption {
        opacity: 1;
    }

    &.bordered {
        overflow: visible;

        &:hover {
            img {
                outline: 1px solid rgb(23, 210, 223);
            }
        }
        img {
            border-radius: 10px;
        }
        figcaption {
            width: 100%;
            font-size: 1.25em;
            bottom: 0px;
            padding: 5px 0;
            background: rgba(0, 0, 0, 0.5);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            left: 0;
        }
    }
}
</style>
