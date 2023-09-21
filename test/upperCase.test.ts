// deno-lint-ignore-file no-explicit-any
import { assertEquals } from "./deps.ts";

import upperCase from "../upperCase.ts";

Deno.test("shouldConvertCase", function (): void {
  assertEquals(upperCase(null as any), "");
  assertEquals(upperCase("test"), "TEST");
  assertEquals(upperCase("TEST"), "TEST");
  assertEquals(upperCase("string"), "STRING");
});

Deno.test("shouldSupportUnicode", function (): void {
  assertEquals(upperCase("\u0131"), "I");
});

Deno.test("shouldSupportLocaleOverride", function () {
  assertEquals(upperCase("i", "tr"), "\u0130");
});
