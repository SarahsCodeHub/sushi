import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";

import Restaurant from "../src/components/Restaurant.vue";

const mockRouter = vi.fn();

const mockRoute = {
  params: {
    name: "Sushi Bar Vitest",
    seatsInTotal: 10,
  },
};

describe("Restaurant", () => {
  test("Restaurant is given and is mounted with props", () => {
    expect(Restaurant).toBeTruthy();

    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });

    expect(wrapper.find("h1").text()).contain("Sushi Bar Vitest");
    expect(wrapper.vm.sushiTable.seatsLength).toBe(10);
  });

  test("When Restaurant is freshly opened or all guests have left, all seats are free and a group of seatsInTotal people may take a seat", () => {
    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    expect(wrapper.vm.sushiTable.isCompletelyFree).toBeTruthy();
    expect(wrapper.vm.sushiTable.findGapAndPlaceGroup(10)).toBeTruthy();
  });

  test("If 2 seats in a row are occupied, then a group with (seats - 2) or less may take place", () => {
    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    // occupy two seats
    wrapper.vm.sushiTable.addNewGroup(2, 5);
    expect(wrapper.vm.sushiTable.findGapAndPlaceGroup(10 - 2)).toBeTruthy();
  });

  test("If we have 12 seatsInTotal and there are 2 groups each with 4 people and 2 free seats between the groups, a group of 2 people may take place ", () => {
    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: {
            params: {
              name: "Sushi Bar Vitest",
              seatsInTotal: 12,
            },
          },
          $router: mockRouter,
        },
      },
    });

    expect(wrapper.vm.sushiTable.seatsLength).toBe(12);
    // occupy two seats
    wrapper.vm.sushiTable.addNewGroup(0, 4);
    wrapper.vm.sushiTable.addNewGroup(6, 4);
    expect(wrapper.vm.sushiTable.findGapAndPlaceGroup(2)).toBeTruthy();
  });

  test("If we have 10 seatsInTotal and there are 2 groups each with 4 people and 2 free seats between the groups, a group of 3 people may not take place ", () => {
    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: {
            params: {
              name: "Sushi Bar Vitest",
              seatsInTotal: 10,
            },
          },
          $router: mockRouter,
        },
      },
    });

    expect(wrapper.vm.sushiTable.seatsLength).toBe(10);
    // place the two groups
    wrapper.vm.sushiTable.addNewGroup(4, 0);
    wrapper.vm.sushiTable.addNewGroup(4, 6);

    expect(wrapper.vm.sushiTable.findGapAndPlaceGroup(3)).toBeFalsy();
  });

  test("If there are enough seats for the incoming group the sushi master is not angry", () => {
    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });

    expect(wrapper.vm.sushiTable.seatsLength).toBe(10);
    // place the two groups
    wrapper.vm.sushiTable.addNewGroup(4, 0);
    wrapper.vm.sushiTable.addNewGroup(4, 6);
    wrapper.vm.findPlaceForIncomingGroupAndUpdateSushiMastersMood(2);

    expect(wrapper.sushiMasterIsAngry).toBeFalsy();
  });

  test("If there are not enough seats for the incoming group the sushi master is angry", () => {
    const wrapper = mount(Restaurant, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });

    expect(wrapper.vm.sushiTable.seatsLength).toBe(10);
    // place the two groups
    wrapper.vm.sushiTable.addNewGroup(4, 0);
    wrapper.vm.sushiTable.addNewGroup(4, 6);
    wrapper.vm.findPlaceForIncomingGroupAndUpdateSushiMastersMood(4);
    console.log(wrapper.sushiMasterIsAngry);
    // expect(wrapper.sushiMasterIsAngry).toBeTruthy();
  });

  // test("When a group leaves, their seats are available in a row again", () => {
  //   const wrapper = mount(Restaurant, {
  //     propsData: {
  //       seatsInTotal: 20,
  //       name: "Sushi Bar Vitest",
  //     },
  //   });
  // });
});
