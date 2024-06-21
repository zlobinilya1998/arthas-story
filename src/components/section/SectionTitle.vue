<script setup>
import { onMounted, ref, computed } from "vue";
import { useAppStore } from "/src/stores/AppStore";
import Fog from "/src/components/shared/Fog.vue";

const props = defineProps({
    borderless: Boolean,
    src: String,
    color: String,
    static: Boolean,
});

const { setActiveSection } = useAppStore();
const title = ref(null);

const color = computed(() => {
    return props.color ?? "var(--accent-color)";
});

const createObserver = () => {
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

    return observer;
};

onMounted(() => {
    const el = title.value;
    const observer = createObserver();
    observer.observe(el);
});
</script>
<template>
    <div
        class="section-history-title"
        ref="title"
        :class="{ borderless: props.borderless }"
        :style="{ backgroundImage: `url(${src})`, borderColor: color, color, backgroundAttachment: props.static ? 'unset' : '' }"
    >
        <slot />
        <Fog />
    </div>
</template>

<style lang="scss">
.section-history-title {
    position: relative;
    margin: 30px 0;
    padding: 10px 0;
    font-size: 2.5em;
    font-family: "Warcraft", sans-serif;
    line-height: 1.5;
    text-shadow: 2px 2px black;
    text-align: center;
    letter-spacing: 0.1em;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
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
