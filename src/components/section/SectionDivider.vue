<template>
    <div class="section-history-divider" :style="{backgroundImage: `url(${background})` }"/>
</template>

<script setup>
import { computed } from 'vue';
import PrimaryBg from "/src/assets/images/section/divider.png";
import SecondaryBg from "/src/assets/images/section/divider-secondary.png";
const props = defineProps({
    primary: {
        type: Boolean,
        default: false,
    },
    secondary: {
        type: Boolean,
        default: false
    },
})


const background = computed(() => {
    return props.secondary ? SecondaryBg : PrimaryBg;
})

</script>

<style lang="scss">
.section-history-divider {
    margin: 20px auto;
    width: 75%;
    height: 10px;
    // background-image: url("/src/assets/images/section/divider-secondary.png");
}
</style>
