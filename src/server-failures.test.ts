import { expect, test } from "vitest";

test("405 Method Not Allowed", async () => {
  const r = await fetch("http://localhost:3000/", { method: "POST" });
  expect(r.status).toBe(405);
});
