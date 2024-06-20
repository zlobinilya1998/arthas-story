<template>
    <div class="fog"><div></div></div>
</template>

<style lang="scss">
.fog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.fog::before,
.fog::after,
.fog div::before,
.fog div::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: repeat-x;
}
.fog div::before,
.fog div::after {
    left: 100%;
}
.fog::before,
.fog div::before {
    background-image: url("/src/assets/images/shared/fog-1.png");
    animation: fogmove 20s linear 0s infinite;
}
.fog::after,
.fog div::after {
    background-image: url("/src/assets/images/shared/fog-2.png");
    animation: fogmove 10s linear 0s infinite;
}
@keyframes fogmove {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(-100%, 0, 0);
    }
}
</style>
