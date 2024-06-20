<script setup>
import Section from "./components/section/Section.vue";
import Navigation from "./components/Navigation.vue";
import Intro from "./components/main/Intro.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
</script>

<template>
    <ScrollProgress />
    <Navigation />
    <div class="intro-video">
        <div class="info-card">
            <h3 class="arthas-title">Arthas Menethil</h3>
            <h4 class="arthas-title">The Lich King</h4>
        </div>
        <video
            style="max-width: 100%"
            loop="loop"
            muted="muted"
            autoplay="autoplay"
            playsinline="true"
            preload="auto"
        >
            <source type="video/webm" src="./assets/arthas.mp4" />
        </video>
        <audio autoplay loop preload="auto" ref="audio">
            <source src="./assets/music/borean-thundra.mp3" type="audio/mpeg" />
        </audio>
    </div>
    <Intro />
    <Section />
</template>

<style scoped>
.intro-video {
    position: relative;
    min-height: 100vh;
}

.info-card {
    position: absolute;
    top: 100px;
    right: 150px;
    max-width: 300px;
    padding: 20px;
}

.arthas-title {
    text-shadow: black 1px 0 10px;
    color: rgba(10, 212, 248, 0.9);
    letter-spacing: 0.1em;
    font-size: 2em;
    text-align: center;
    font-family: Folkard, sans-serif;
    margin: 0;
}

.arthas-description {
    font-family: Folkard, sans-serif;
}
</style>
