import { expect, test, describe } from "bun:test";
import { rewrite } from ".";

const input = "index.html";
describe("Test html minifier function", () => {
  test("Expect minified to be smaller than original", async () => {
    expect((await rewrite(input)).length).toBeLessThan((await Bun.file("test/src/" + input).text()).length);
  });

  test("2 * 2", () => {
    expect(2 * 2).toBe(4);
  });
});
