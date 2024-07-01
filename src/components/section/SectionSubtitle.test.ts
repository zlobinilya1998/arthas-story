import {describe, it, expect } from "vitest";
import {mount} from "@vue/test-utils";
import SectionSubtitle from "./SectionSubtitle.vue"

describe("Section test", () => {
  it("Render default slot", () => {
    const wrapper = mount(SectionSubtitle, {
      slots: {
        default: "Test"
      }
    })
    expect(wrapper.html()).toContain("Test");
  })
})