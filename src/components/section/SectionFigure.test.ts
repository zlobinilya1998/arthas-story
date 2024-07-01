import { describe, it, expect } from "vitest";
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

    it("Render caption", () => {
        const wrapper = mount(SectionFigure, {
            props: {
                caption: "Caption"
            }
        })
        expect(wrapper.html()).toContain("Caption")
    })

    it("Render img", () => {
        const wrapper = mount(SectionFigure, {
            props: {
                src: "/src/images/betrayal.webp",
            }
        })
        expect(wrapper.find("img[previewable]")).toBeTruthy();
    })

    it("Apply bordered class", () => {
        const wrapper = mount(SectionFigure, {
            props: {
                bordered: true,
            }
        })
        expect(wrapper.classes()).toContain('bordered')
    })
});
