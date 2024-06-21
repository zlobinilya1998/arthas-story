<script setup>
import Section from "./components/section/Section.vue";
import Navigation from "./components/Navigation.vue";
import Intro from "./components/main/Intro.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import PreviewDialog from "/src/components/dialog/PreviewDialog.vue";

import { onMounted } from "vue";
import { useAppStore } from "/src/stores/AppStore";
const store = useAppStore();
onMounted(() => {
    const images = Array.from(document.querySelectorAll("img[previewable]"));
    images.forEach((image) => {
        image.onclick = (e) => {
            store.showPreview(e.target.src);
        };
    });
});
</script>

<template>
    <ScrollProgress />
    <PreviewDialog />
    <Navigation />
    <Intro />
    <Section />
</template>

<style scoped></style>
