import { assertEquals } from "./deps.ts";

import lowerCase from "../lowerCase.ts";

Deno.test("shouldConvertCase", function (): void {
  assertEquals(lowerCase(null as any), "");
  assertEquals(lowerCase("TEST"), "test");
  assertEquals(lowerCase("test"), "test");
});

Deno.test("shouldSupportLocaleOverride", function () {
  assertEquals(lowerCase("I", "tr"), "\u0131");
});
