import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import StartNewRestaurant from "../src/components/StartNewRestaurant.vue";

describe("StartNewRestaurant", () => {
  test("StartNewRestaurant default values set and useful", () => {
    expect(StartNewRestaurant).toBeTruthy();

    const wrapper = mount(StartNewRestaurant);
    const inputName = wrapper.find("#name");
    const inputAmountOfSeats = wrapper.find("#amountOfSeats");

    expect(inputName.element.value).toBe("Sushi Bar F+P");
    expect(inputAmountOfSeats.element.value).toBe("10");
  });

  test("StartNewRestaurant values change correct on input", () => {
    const wrapper = mount(StartNewRestaurant);
    const inputName = wrapper.find("#name");
    const inputAmountOfSeats = wrapper.find("#amountOfSeats");

    inputName.setValue("Sushi Bar Vitest");
    inputAmountOfSeats.setValue("30");

    expect(inputName.element.value).toBe("Sushi Bar Vitest");
    expect(inputAmountOfSeats.element.value).toBe("30");
  });
});
