import { assertEquals } from "./deps.ts";

import upperCase from "../upperCase.ts";

Deno.test(function shouldConvertCase(): void {
  assertEquals(upperCase(null as any), "");
  assertEquals(upperCase("test"), "TEST");
  assertEquals(upperCase("TEST"), "TEST");
  assertEquals(upperCase("string"), "STRING");
});

Deno.test(function shouldSupportUnicode(): void {
  assertEquals(upperCase("\u0131"), "I");
});

Deno.test(function shouldSupportLocaleOverride() {
  assertEquals(upperCase("i", "tr"), "\u0130");
});
