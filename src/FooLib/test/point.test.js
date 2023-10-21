import { describe, expect, test } from "vitest";

import {
  Point_make_point as make_point,
  Event_move as move,
} from "../Library.fs.js";

describe("make_point", () => {
  test("makes a point", () => {
    const p = make_point(1, 2);

    expect(p).toMatchInlineSnapshot(`
      {
        "x": 1,
        "y": 2,
      }
    `);
  });

  test("move", () => {
    expect(move).toMatchInlineSnapshot(`
      [
        "Move",
        5,
        10,
      ]
    `);
  });
});
