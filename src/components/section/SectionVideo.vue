<template>
    <video style="max-width: 100%" muted="muted" playsinline="true" preload="auto">
        <source type="video/webm" :src="src" />
    </video>
</template>

<script setup>
const props = defineProps({
    src: String,
});
</script>
