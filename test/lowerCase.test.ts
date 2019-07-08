import { test, assertEquals } from "./deps.ts";

import lowerCase from "../lowerCase.ts";

test(function shouldConvertCase(): void {
  assertEquals(lowerCase(null), "");
  assertEquals(lowerCase("TEST"), "test");
  assertEquals(lowerCase("test"), "test");
});

test(function shouldSupportLocaleOverride() {
  assertEquals(lowerCase("I", "tr"), "\u0131");
});
