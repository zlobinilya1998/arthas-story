<script setup>
import { ref, onMounted, computed } from "vue";
import { useAppStore } from "../stores/AppStore";

const store = useAppStore();
const isOpened = ref(true);
const toggleOpen = () => {
    isOpened.value = !isOpened.value;
};

let navigations = ref([]);
const navigation = ref(null);

const showNavigation = computed(() => {
    return store.activeSection;
});

const scrollToTitle = (text) => {
    const titles = Array.from(document.querySelectorAll(".section-history-title"));
    const item = titles.find((item) => item.textContent === text);
    if (!item) return;
    item.scrollIntoView({ behavior: "smooth" });
};

const createNavigation = () => {
    const items = Array.from(document.querySelectorAll(".section-history-item"));
    items.forEach((history) => {
        const titles = Array.from(history.querySelectorAll(".section-history-title"));
        titles.forEach((title) => {
            const navItem = {
                title: title.innerText,
                children: [],
            };
            const subtitles = Array.from(history.querySelectorAll(".section-history-subtitle"));
            subtitles.forEach((title) => navItem.children.push(title.innerText));
            navigations.value.push(navItem);
        });
    });
};

onMounted(() => {
    createNavigation();
    navigation.value.classList.add("visible");
});
</script>

<template>
    <div class="navigation" ref="navigation" :style="{ display: showNavigation ? '' : 'none' }">
        <div class="navigation-items" :class="{ expanded: isOpened }">
            <div
                v-for="item in navigations"
                class="navigation-item"
                :class="{ active: store.activeSection === item.title }"
                @click="scrollToTitle(item.title)"
            >
                <div class="navigation-item-title" v-text="item.title" />
                <ul
                    v-if="item.children"
                    class="navigation-item-children"
                    style="margin: 0; padding-left: 20px; list-style: none"
                >
                    <li v-for="children in item.children" v-text="children" />
                </ul>
            </div>
        </div>
        <div class="navigation-item" @click="toggleOpen">
            {{ isOpened ? "Collapse" : "Table of contents" }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.navigation {
    top: -100px;
    left: 20px;
    min-width: 250px;
    position: fixed;
    border-left: 1px solid var(--secondary-color);
    transition: 0.5s;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
    &-item {
        cursor: url("/src/assets/images/cursor-hover.webp"), auto;
        padding: 0.5em 1em;
        font-size: 1.5em;
        transition: 0.3s;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        border-right: 1px solid transparent;
        &:hover,
        &.active {
            background-color: var(--secondary-color);
            border-right-color: var(--main-color);
            .navigation-item-title {
                color: var(--accent-color);
                text-shadow: 1px 1px black;
            }
        }
    }
    &.visible {
        top: 100px;
        @media (max-width: 600px) {
            top: 0;
            left: 0;
            width: 100%;
            background-color: black;
            border-left: unset;
            border-right: unset;
            border-top: 1px solid var(--secondary-color);
            border-bottom: 1px solid var(--secondary-color);
            max-height: 100vh;
            overflow-y: scroll;
        }
    }
}
.navigation-items {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
}
.expanded {
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
}
</style>
