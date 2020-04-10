import { assertEquals } from "./deps.ts";

import pathCase from "../pathCase.ts";

Deno.test({
  name: "should path case a single word",
  fn: (): void => {
    assertEquals(pathCase("test"), "test");
    assertEquals(pathCase("TEST"), "test");
  },
});

Deno.test({
  name: "should path case regular sentence cased strings",
  fn: (): void => {
    assertEquals(pathCase("test string"), "test/string");
    assertEquals(pathCase("Test String"), "test/string");
  },
});

Deno.test({
  name: "should path case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(pathCase("path.case"), "path/case");
    assertEquals(pathCase("path/case"), "path/case");
  },
});

Deno.test({
  name: "should path case path cased strings",
  fn: (): void => {
    assertEquals(pathCase("TestString"), "test/string");
    assertEquals(pathCase("TestString1_2_3"), "test/string1/2/3");
  },
});

Deno.test({
  name: "should support non-latin characters",
  fn: (): void => {
    assertEquals(pathCase("My Entrée"), "my/entrée");
  },
});

Deno.test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(pathCase("MY STRING", "tr"), "my/strıng");
  },
});
