import { expect, test } from "vitest";

test("200 OK", async () => {
  const r = await fetch("http://localhost:3000");
  expect(r.status).toBe(200);
});
