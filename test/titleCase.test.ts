import { test, assertEquals } from "./deps.ts";

import titleCase from "../titleCase.ts";

test({
  name: "should title case a single word",
  fn: (): void => {
    assertEquals(titleCase("test"), "Test");
    assertEquals(titleCase("TEST"), "Test");
  }
});

test({
  name: "should title case regular sentence cased strings",
  fn: (): void => {
    assertEquals(titleCase("test string"), "Test String");
    assertEquals(titleCase("Test String"), "Test String");
  }
});

test({
  name: "should title case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(titleCase("dot.case"), "Dot Case");
    assertEquals(titleCase("path/case"), "Path Case");
  }
});

test({
  name: "should title case pascal cased strings",
  fn: (): void => {
    assertEquals(titleCase("TestString"), "Test String");
    assertEquals(titleCase("TestString1_2_3"), "Test String1 2 3");
    assertEquals(titleCase("TestString_1_2_3"), "Test String 1 2 3");
  }
});

test({
  name: "should support non-ascii characters",
  fn: (): void => {
    assertEquals(titleCase("éxample"), "Éxample");
  }
});

test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(titleCase("STRING", "tr"), "Strıng");
  }
});
