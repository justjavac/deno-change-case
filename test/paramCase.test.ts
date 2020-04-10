import { assertEquals } from "./deps.ts";

import paramCase from "../paramCase.ts";

Deno.test({
  name: "should param case a single word",
  fn: (): void => {
    assertEquals(paramCase("test"), "test");
    assertEquals(paramCase("TEST"), "test");
  },
});

Deno.test({
  name: "should param case regular sentence cased strings",
  fn: (): void => {
    assertEquals(paramCase("test string"), "test-string");
    assertEquals(paramCase("Test String"), "test-string");
  },
});

Deno.test({
  name: "should param case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(paramCase("dot.case"), "dot-case");
    assertEquals(paramCase("path/case"), "path-case");
  },
});

Deno.test({
  name: "should param case param cased strings",
  fn: (): void => {
    assertEquals(paramCase("TestString"), "test-string");
    assertEquals(paramCase("testString1_2_3"), "test-string1-2-3");
    assertEquals(paramCase("testString_1_2_3"), "test-string-1-2-3");
  },
});

Deno.test({
  name: "should param case non-latin strings",
  fn: (): void => {
    assertEquals(paramCase("My Entrée"), "my-entrée");
  },
});

Deno.test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(paramCase("MY STRING", "tr"), "my-strıng");
  },
});
