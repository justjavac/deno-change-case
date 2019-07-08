import { test, assertEquals } from "./deps.ts";

import snakeCase from "../snakeCase.ts";

test({
  name: "should snake case a single word",
  fn: (): void => {
    assertEquals(snakeCase("test"), "test");
    assertEquals(snakeCase("TEST"), "test");
  }
});

test({
  name: "should snake case regular sentence cased strings",
  fn: (): void => {
    assertEquals(snakeCase("test string"), "test_string");
    assertEquals(snakeCase("Test String"), "test_string");
  }
});

test({
  name: "should snake case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(snakeCase("dot.case"), "dot_case");
    assertEquals(snakeCase("path/case"), "path_case");
  }
});

test({
  name: "should snake case pascal cased strings",
  fn: (): void => {
    assertEquals(snakeCase("TestString"), "test_string");
    assertEquals(snakeCase("TestString1_2_3"), "test_string1_2_3");
  }
});

test({
  name: "should support non-latin characters",
  fn: (): void => {
    assertEquals(snakeCase("My Entrée"), "my_entrée");
  }
});

test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(snakeCase("MY STRING", "tr"), "my_strıng");
  }
});
