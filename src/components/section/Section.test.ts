import {beforeEach, describe, it } from "vitest";
import {mount} from "@vue/test-utils";
import Section from "./Section.vue"
import { createTestingPinia } from "@pinia/testing";
import { vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";

describe("Section test", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })


  it("should render", () => {
  })
})