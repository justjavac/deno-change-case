import { assertEquals } from "./deps.ts";

import headerCase from "../headerCase.ts";

Deno.test({
  name: "should upper case a single word",
  fn: (): void => {
    assertEquals(headerCase("test"), "Test");
    assertEquals(headerCase("TEST"), "Test");
  },
});

Deno.test({
  name: "should header case regular sentence cased strings",
  fn: (): void => {
    assertEquals(headerCase("test string"), "Test-String");
    assertEquals(headerCase("Test String"), "Test-String");
  },
});

Deno.test({
  name: "should header case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(headerCase("dot.case"), "Dot-Case");
    assertEquals(headerCase("path/case"), "Path-Case");
  },
});

Deno.test({
  name: "should header case pascal cased strings",
  fn: (): void => {
    assertEquals(headerCase("TestString"), "Test-String");
  },
});

Deno.test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(headerCase("MY_STRING", "tr"), "My-Strıng");
  },
});
