import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";

import Restaurant from "../src/components/Restaurant.vue";

const mockRouter = vi.fn();

describe("Restaurant", () => {
  test("Restaurant is given and is mounted with props", () => {
    expect(Restaurant).toBeTruthy();

    const mockRoute = {
      params: {
        name: "Sushi Bar Vitest",
        seatsInTotal: 20,
      },
    };

    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });

    expect(wrapper.find("h1").text()).contain("Sushi Bar Vitest");
  });

  test("When Restaurant is freshly opened or all guests have left, all seats are free and a group of seatsInTotal people may take a seat", () => {
    const mockRoute = {
      params: {
        name: "Sushi Bar Vitest",
        seatsInTotal: 20,
      },
    };

    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
  });

  // test("If 2 seats in a row are occupied, then a group with (seats - 2) or less ", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });

  // test("If only 2 seats in a row are occupied, then a group with (seats - 2) or less ", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });

  // test("If we have 12 seatsInTotal and there are 2 groups each with 4 people and 2 free seats between the groups, a group of 2 people may take place ", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });

  // test("If we have 12 seatsInTotal and there are 2 groups each with 4 people and 2 free seats between the groups, a group of 3 people may not take place ", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });

  // test("If there are enough seats for the incoming group the sushi master is amused", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });

  // test("If there are not enough seats for the incoming group the sushi master is not amused", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });

  // test("When a group leaves, their seats are available in a row again", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });

  // test("Groups stay at max 1 minute in the restaurant", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });
});
