import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SectionQuote from "./SectionQuote.vue";

describe("Section test", () => {
    it("Render default slot", () => {
        const wrapper = mount(SectionQuote, {
            slots: {
                default: "Test",
            },
        });
        expect(wrapper.html()).toContain("Test");
    });
});
