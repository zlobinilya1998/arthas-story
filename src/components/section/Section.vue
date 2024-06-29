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
    padding: 0 2em 2em;
    background-position: top;
    background-image: url("https://assets.worldofwarcraft.blizzard.com/static/components/Pane/Pane-dirtDark.ea235926d6487091ac2d6786fd7d2615.jpg");

    &-top {
        margin: 1em 0 5em;
        img {
            margin: 0 auto;
        }

        @media (max-width: 600px){
            margin: 0;
        }
    }

    &-container {
        max-width: 900px;
        margin: 0 auto;
        font-family: Roboto, sans-serif;
        line-height: 1.5;
        padding-left: 1em;
    }

    @media (max-width: 600px) {
        padding: 0 1em 1em;

        &-container {
            padding-left: unset;
        }
    }
}
</style>
