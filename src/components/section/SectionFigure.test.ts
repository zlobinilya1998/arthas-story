import { beforeEach, describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SectionFigure from "./SectionFigure.vue";

describe("SectionFigure test", () => {
    it("Render section quote", () => {
        const wrapper = mount(SectionFigure, {
            slots: {
                default: "Test",
            },
        });
        expect(wrapper.html()).toContain("Test");
    });
});
