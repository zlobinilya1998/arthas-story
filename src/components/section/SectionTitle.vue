<script setup>
import { onMounted, ref } from "vue";
import { useAppStore } from "/src/stores/AppStore";
import Fog from "/src/components/shared/Fog.vue";

const props = defineProps({
    borderless: Boolean,
    src: String,
    borderColor: String,
});

const { setActiveSection } = useAppStore();
const title = ref(null);

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("visible");
            setActiveSection(el.innerText);
        }
    });
}, options);

onMounted(() => {
    const el = title.value;
    observer.observe(el);
});
</script>
<template>
    <div
        class="section-history-title"
        ref="title"
        :class="{ borderless: props.borderless }"
        :style="{ backgroundImage: `url(${src})`, borderColor: props.borderColor }"
    >
        <slot />
        <Fog />
    </div>
</template>

<style lang="scss">
.section-history-title {
    position: relative;
    margin: 30px 0;
    color: var(--main-color);
    padding: 10px 0;
    line-height: 1.5;
    font-size: 2.5em;
    font-family: "Warcraft", sans-serif;
    text-shadow: 2px 2px black;
    text-align: center;
    letter-spacing: 0.1em;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    transition: 0.5s;
    border: 1px solid transparent;
    opacity: 0;

    &.visible {
        border-color: var(--main-color);
        background-position: center;
        opacity: 1;
    }

    &.borderless {
        border: unset !important;
    }
}
</style>
