import { test, assertEquals } from "./deps.ts";

import dotCase from "../dotCase.ts";

test({
  name: "should dot case a single word",
  fn: (): void => {
    assertEquals(dotCase("test"), "test");
    assertEquals(dotCase("TEST"), "test");
  }
});

test({
  name: "should dot case regular sentence cased strings",
  fn: (): void => {
    assertEquals(dotCase("test string"), "test.string");
    assertEquals(dotCase("Test String"), "test.string");
  }
});

test({
  name: "should dot case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(dotCase("dot.case"), "dot.case");
    assertEquals(dotCase("path/case"), "path.case");
  }
});

test({
  name: "should dot case dot cased strings",
  fn: (): void => {
    assertEquals(dotCase("TestString"), "test.string");
    assertEquals(dotCase("TestString1_2_3"), "test.string1.2.3");
    assertEquals(dotCase("TestString_1_2_3"), "test.string.1.2.3");
  }
});

test({
  name: "should support non-latin characters",
  fn: (): void => {
    assertEquals(dotCase("My Entrée"), "my.entrée");
  }
});

test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(dotCase("MY STRING", "tr"), "my.strıng");
  }
});
