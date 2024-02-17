import { expect, test, describe } from "bun:test";
import { rewrite } from ".";

const input = await Bun.file("test/src/index.html").text();
describe("Test html minifier function", () => {
  test("Expect minified to be smaller than original", async () => {
    expect((await rewrite(input)).length).toBeLessThan(input.length);
  });

  test("2 * 2", () => {
    expect(2 * 2).toBe(4);
  });
});
