<template>
    <div class="progress-container">
        <div class="progress-bar" id="myBar"/>
    </div>
</template>

<script setup>
const scrollHandler = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};
window.onscroll = scrollHandler;
</script>

<style lang="scss">
.progress-container {
    z-index: 1;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5px;
}

.progress-bar {
    height: 5px;
    background: var(--secondary-color);
    width: 0%;
}
</style>
