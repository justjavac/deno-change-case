import { assertEquals } from "./deps.ts";

import lowerCase from "../lowerCase.ts";

Deno.test(function shouldConvertCase(): void {
  assertEquals(lowerCase(null as any), "");
  assertEquals(lowerCase("TEST"), "test");
  assertEquals(lowerCase("test"), "test");
});

Deno.test(function shouldSupportLocaleOverride() {
  assertEquals(lowerCase("I", "tr"), "\u0131");
});
