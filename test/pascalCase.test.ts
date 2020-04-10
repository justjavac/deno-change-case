import { assertEquals } from "./deps.ts";

import pascalCase from "../pascalCase.ts";

Deno.test({
  name: "should pascal case a single word",
  fn: (): void => {
    assertEquals(pascalCase("test"), "Test");
    assertEquals(pascalCase("TEST"), "Test");
  },
});

Deno.test({
  name: "should pascal case regular sentence cased strings",
  fn: (): void => {
    assertEquals(pascalCase("test string"), "TestString");
    assertEquals(pascalCase("Test String"), "TestString");
  },
});

Deno.test({
  name: "should pascal case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(pascalCase("dot.case"), "DotCase");
    assertEquals(pascalCase("path/case"), "PathCase");
  },
});

Deno.test({
  name: "should pascal case pascal cased strings",
  fn: (): void => {
    assertEquals(pascalCase("TestString"), "TestString");
  },
});

Deno.test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(pascalCase("my STRING", "tr"), "MyStrıng");
  },
});

Deno.test({
  name: "should merge numbers",
  fn: (): void => {
    assertEquals(pascalCase("test 1 2 3", null as any, true), "Test123");
  },
});
