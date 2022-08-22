import { expect, test } from "vitest";
import { Seat, SushiTable } from "../src/functions/sushi-table";

test("Sushi Table", () => {
  const testTable = new SushiTable(10);
  console.log(testTable.size());
  expect(testTable.length).toBe(10);
});
