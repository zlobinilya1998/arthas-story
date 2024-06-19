<script setup>
import { ref } from "vue";
const isOpened = ref(true);

const toggleOpen = () => {
    isOpened.value = !isOpened.value;
};
</script>

<template>
    <div class="navigation">
        <div class="navigation-items" :class="{ expanded: isOpened }">
            <div class="navigation-item">Rise of the lich king</div>
            <div class="navigation-item">Navigation</div>
            <div class="navigation-item">Navigation</div>
            <div class="navigation-item">Navigation</div>
            <div class="navigation-item">Navigation</div>
            <div class="navigation-item">Navigation</div>
        </div>
        <div class="navigation-item" @click="toggleOpen">Expand</div>
    </div>
</template>

<style scoped lang="scss">
.navigation {
    top: 50px;
    left: 20px;
    width: 300px;
    position: fixed;
    z-index: 1;
    background-color: skyblue;
    &-item {
        cursor: pointer;
        padding: 5px 10px;
        transition: .3s;
        &:hover {
            background-color: rgb(11, 119, 234);
        }
    }
}
.navigation-items {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    border-bottom: 1px solid rgb(11, 119, 234);
}
.expanded {
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
}
</style>
