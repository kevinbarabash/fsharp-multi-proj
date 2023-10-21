import { describe, expect, test } from "vitest";

import { Arithmetic_add as add } from "../Library.fs.js";

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds two numbers (snapshot)", () => {
    expect(add(2, 2)).toMatchInlineSnapshot("4");
  });
});
