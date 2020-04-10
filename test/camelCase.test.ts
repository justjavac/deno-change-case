import { assertEquals } from "./deps.ts";

import camelCase from "../camelCase.ts";

Deno.test({
  name: "should convert camelCase case",
  fn: (): void => {
    assertEquals(camelCase("test"), "test");
    assertEquals(camelCase("TEST"), "test");
  },
});

Deno.test({
  name: "should camel case regular sentence cased strings",
  fn: (): void => {
    assertEquals(camelCase("test string"), "testString");
    assertEquals(camelCase("Test String"), "testString");
  },
});

Deno.test({
  name: "should camel case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(camelCase("dot.case"), "dotCase");
    assertEquals(camelCase("path/case"), "pathCase");
  },
});

Deno.test({
  name: "should underscore periods inside numbers",
  fn: (): void => {
    assertEquals(camelCase("version 1.2.10"), "version_1_2_10");
    assertEquals(camelCase("version 1.21.0"), "version_1_21_0");
  },
});

Deno.test({
  name: "should camel case pascal cased strings",
  fn: (): void => {
    assertEquals(camelCase("TestString"), "testString");
  },
});

Deno.test({
  name: "should camel case non-latin strings",
  fn: (): void => {
    assertEquals(camelCase("simple éxample"), "simpleÉxample");
  },
});

Deno.test({
  name: "should support locale",
  fn: (): void => {
    assertEquals(camelCase("STRING 1.2", "tr"), "strıng_1_2");
  },
});

Deno.test({
  name: "should enable number grouping",
  fn: (): void => {
    assertEquals(camelCase("test 1 2 3", null as any, true), "test123");
  },
});
