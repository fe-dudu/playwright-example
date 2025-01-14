import { test } from "@playwright/test";

const noop = () => { };

test.describe("index page", () => {
  test("step 1", async () => {
    await test.step("1-1", noop);
    await test.step("1-2", noop);
  });

  test("step 2", async () => {
    await test.step("2-1", noop);
    await test.step("2-2", noop);
  });
});