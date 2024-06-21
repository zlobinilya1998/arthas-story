import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
    state: () => ({
        activeSection: null,
        preview: {
            show: false,
            img: "",
        },
    }),
    actions: {
        setActiveSection(title) {
            this.activeSection = title;
        },
        showPreview(src) {
            this.preview.img = src;
            this.preview.show = true;
        },
        closePreview() {
            this.preview.img = "";
            this.preview.show = false;
        },
    },
});
