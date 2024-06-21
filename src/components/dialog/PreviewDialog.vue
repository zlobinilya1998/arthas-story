<template>
    <Transition>
        <div class="preview-dialog" v-if="show" @click="closeDialog">
            <div class="preview-dialog-body">
                <img class="preview-dialog-img" :src="src" />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import img from "/src/assets/images/betrayal.webp";
import { useAppStore } from "/src/stores/AppStore";
import { computed } from "vue";
const store = useAppStore();

const show = computed(() => store.preview.show);
const src = computed(() => store.preview.img);

const closeDialog = (e) => {
    store.closePreview();
};
</script>

<style lang="scss">
.preview-dialog {
    z-index: 10;
    position: fixed;
    inset: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--main-color);
    &-body {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 900px;
    }
    &-img {
        max-width: 100%;
        object-fit: cover;
    }
}
</style>
