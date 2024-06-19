<script setup>
const news = [
    {
        img: "https://static.wikia.nocookie.net/wowpedia/images/b/bc/Warcraft_III_Box_-_Arthas.jpg",
        creationDate: new Date(),
        title: "Patch 5.3 on Mistblade 2!",
    },
    {
        img: "https://stormforge.gg/storage/site/9O91Xv1BL0GfcoNzzUhgU40i2RVF1VsQZvva7fuh.png",
        creationDate: new Date(),
        title: "Netherwing now supports the WotLK Client!",
    },
    {
        img: "https://stormforge.gg/assets_new/52me/small.png",
        creationDate: new Date(),
        title: "Mistblade II - A Spring of Changes",
    },
    {
        img: "https://stormforge.gg/assets_new/24nw1/miniature-2.png",
        creationDate: new Date(),
        title: "Netherwing Patch 2.4 Announcement",
    },
];
</script>

<template>
    <div class="news">
        <div
            class="news-item"
            v-for="item in news"
            :style="{ backgroundImage: `url(${item.img})` }"
        >
            <span class="news-item-title">{{ item.title }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.news {
    padding: 0 80px;
    display: flex;
    gap: 10px;
    &-item {
        padding: 110px 40px 10px 20px;
        border-radius: 10px;
        box-shadow: inset 5px 5px 20px 20px rgba(0, 0, 0, 0.75);
        background-size: cover;
        background-repeat: no-repeat;
        transition: 0.3s;
        border: 1px solid transparent;
        cursor: pointer;
        &:hover {
            border: 1px solid goldenrod;
        }

        &-title {
            font-family: Verdana, sans-serif;
            font-weight: 500;
        }
    }
}
</style>
