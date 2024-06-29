import {beforeEach, describe, it, expect } from "vitest";
import {mount} from "@vue/test-utils";
import SectionText from "./SectionText.vue"
import { createPinia, setActivePinia } from "pinia";

describe("Section test", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })


  it("Not apply paragraph class", () => {
    const wrapper = mount(SectionText)
    const classes = wrapper.classes();
    const isHaveParagraphClass = classes.includes("paragraph");
    expect(isHaveParagraphClass).toBeFalsy();
  })

  it("Apply paragraph class", () => {
    const wrapper = mount(SectionText, {props: {
      paragraph: true
    }})
    const classes = wrapper.classes();
    expect(classes).includes("paragraph")
  })
})