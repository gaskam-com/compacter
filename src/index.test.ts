import { expect, test, describe } from "bun:test";
import { rewrite } from ".";

const input = "index.html";
describe("Test html minifier function", () => {
  test("Expect minified to contain no comments", async () => {
    expect((await rewrite(input)).includes("<!--")).toBe(false);
  });
  
  test("Expect minified to contain no newlines", async () => {
    expect((await rewrite(input)).includes("\n")).toBe(false);
  });
  
  test("Expect minified to contain no tabs", async () => {
    expect((await rewrite(input)).includes("\t")).toBe(false);
  });
  
  test("Expect minified to contain no carriage returns", async () => {
    expect((await rewrite(input)).includes("\r")).toBe(false);
  });
  
  test("Expect minified to contain no double spaces", async () => {
    expect((await rewrite(input)).includes("  ")).toBe(false);
  });
  
  test("Expect minified to contain no leading spaces", async () => {
    expect((await rewrite(input)).includes(" <")).toBe(false);
  });
  
  test("Expect minified to contain no trailing spaces", async () => {
    expect((await rewrite(input)).includes("> ")).toBe(false);
  });

  test("Expect minified to be smaller than original", async () => {
    expect((await rewrite(input)).length).toBeLessThan((await Bun.file("test/src/" + input).text()).length);
  });
  test("Expect minified to be 0% smaller than original", async () => {
    const original = (await Bun.file("test/src/" + input).text()).length;
    const minified = (await rewrite(input)).length;
    expect(minified).toBeGreaterThan(original * 0.0);
  });

  test("Expect minified to be 10% smaller than original", async () => {
    const original = (await Bun.file("test/src/" + input).text()).length;
    const minified = (await rewrite(input)).length;
    expect(minified).toBeGreaterThan(original * 0.1);
  });

  test("Expect minified to be 20% smaller than original", async () => {
    const original = (await Bun.file("test/src/" + input).text()).length;
    const minified = (await rewrite(input)).length;
    expect(minified).toBeGreaterThan(original * 0.2);
  });

  test("Expect minified to be 30% smaller than original", async () => {
    const original = (await Bun.file("test/src/" + input).text()).length;
    const minified = (await rewrite(input)).length;
    expect(minified).toBeGreaterThan(original * 0.3);
  });

  test("Expect minified to be 40% smaller than original", async () => {
    const original = (await Bun.file("test/src/" + input).text()).length;
    const minified = (await rewrite(input)).length;
    expect(minified).toBeGreaterThan(original * 0.4);
  });

  test("Expect minified to be 50% smaller than original", async () => {
    const original = (await Bun.file("test/src/" + input).text()).length;
    const minified = (await rewrite(input)).length;
    expect(minified).toBeGreaterThan(original * 0.5);
  });
});