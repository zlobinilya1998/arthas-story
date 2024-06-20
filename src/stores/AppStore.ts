import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
    state: () => ({ activeSection: null }),
    actions: {
        setActiveSection(title) {
          this.activeSection = title;
        },
    },
});
