import { expect, test } from "vitest";
import useSushiTable from "../src/composables/sushi-table";

test("Sushi Table", () => {
  const testTable = useSushiTable(10);
  expect(testTable.seatsLength).toBe(10);
});
