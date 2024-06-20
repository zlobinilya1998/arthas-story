<template>
    <div>
        <div class="section-history">
            <div class="section-history-container">
                <div class="section-history-top">
                    <img height="175px" width="175px" src="/src/assets/images/lordaeron.png" />
                </div>
                <Rise />
                <SilverHand />
                <Northrend />
                <LichKing />
                <QuelThalas />
            </div>
        </div>
    </div>
</template>

<script setup>
import Rise from "/src/components/stories/Rise.vue";
import SilverHand from "/src/components/stories/SilverHand.vue";
import Northrend from "/src/components/stories/Northrend.vue";
import LichKing from "/src/components/stories/LichKing.vue";
import QuelThalas from "/src/components/stories/QuelThalas.vue";
</script>

<style lang="scss">
.section-history {
    position: relative;
    display: flex;
    padding: 0 20px 20px;
    background-position: top;
    background-image: url("https://assets.worldofwarcraft.blizzard.com/static/components/Pane/Pane-dirtDark.ea235926d6487091ac2d6786fd7d2615.jpg");

    &-top {
        margin: 10px 0 50px;
        img {
            margin: 0 auto;
        }
    }

    &-container {
        max-width: 900px;
        margin: 0 auto;
        font-size: 1em;
        font-family: Roboto, sans-serif;
        line-height: 1.5;
        padding-left: 1em;
    }
}
</style>
