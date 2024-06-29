<template>
    <div class="section-history-img" :class="{ bordered }">
        <figure>
            <Transition mode="out-in">
                <img ref="img" :src="imgSrc" :key="index" previewable/>
            </Transition>
            <figcaption v-text="caption" />
            <SectionQuote v-if="$slots.default">
                <slot />
            </SectionQuote>
        </figure>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import SectionQuote from "./SectionQuote.vue";
const props = defineProps({
    caption: String,
    src: String | [],
    bordered: Boolean,
});

const isHaveMultipleImages = computed(() => {
    return Array.isArray(props.src);
});
let index = ref(0);
const imgSrc = computed(() => {
    if (isHaveMultipleImages.value) return props.src[index.value];
    return props.src;
});

const createSlider = () => {
    if (!isHaveMultipleImages.value) return;
    const maxIndex = props.src.length - 1;
    setInterval(() => {
        if (index.value === maxIndex) {
            index.value = 0;
            return
        }
        index.value += 1;
    }, 5_000);
};

onMounted(() => {
    createSlider();
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
        font-size: 3em;
        text-align: center;
        text-shadow: black 1px 0 10px;
        font-family: "Folkard", sans-serif;
        border-radius: 10px;
        padding: 10px;
    }

    figure:hover figcaption {
        opacity: 1;
    }

    &.bordered {
        overflow: visible;

        &:hover {
            img {
                outline: 1px solid var(--main-color);
            }
        }
        img {
            border-radius: 10px;
        }
        figcaption {
            width: 100%;
            font-size: 1.75em;
            bottom: 0px;
            padding: 5px 0;
            background: rgba(0, 0, 0, 1);
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            left: 0;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-leave-to,
.v-enter-from {
    opacity: 0;
}
</style>
