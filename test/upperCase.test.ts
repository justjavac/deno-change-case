import { test, assertEquals } from "./deps.ts";

import upperCase from "../upperCase.ts";

test(function shouldConvertCase(): void {
  assertEquals(upperCase(null), "");
  assertEquals(upperCase("test"), "TEST");
  assertEquals(upperCase("TEST"), "TEST");
  assertEquals(upperCase("string"), "STRING");
});

test(function shouldSupportUnicode(): void {
  assertEquals(upperCase("\u0131"), "I");
});

test(function shouldSupportLocaleOverride() {
  assertEquals(upperCase("i", "tr"), "\u0130");
});
