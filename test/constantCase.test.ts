import { assertEquals } from "./deps.ts";

import constantCase from "../constantCase.ts";

Deno.test({
  name: "should upper case a single word",
  fn: (): void => {
    assertEquals(constantCase("test"), "TEST");
    assertEquals(constantCase("TEST"), "TEST");
  },
});

Deno.test({
  name: "should constant case regular sentence cased strings",
  fn: (): void => {
    assertEquals(constantCase("test string"), "TEST_STRING");
    assertEquals(constantCase("Test String"), "TEST_STRING");
  },
});

Deno.test({
  name: "should constant case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(constantCase("dot.case"), "DOT_CASE");
    assertEquals(constantCase("path/case"), "PATH_CASE");
  },
});

Deno.test({
  name: "should constant case pascal cased strings",
  fn: (): void => {
    assertEquals(constantCase("TestString"), "TEST_STRING");
  },
});

Deno.test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(constantCase("myString", "tr"), "MY_STRİNG");
  },
});
