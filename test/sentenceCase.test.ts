import { assertEquals } from "./deps.ts";

import sentenceCase from "../sentenceCase.ts";

Deno.test({
  name: "should lower case a single word",
  fn: (): void => {
    assertEquals(sentenceCase("test"), "Test");
    assertEquals(sentenceCase("TEST"), "Test");
  },
});

Deno.test({
  name: "should sentence case regular sentence cased strings",
  fn: (): void => {
    assertEquals(sentenceCase("test string"), "Test string");
    assertEquals(sentenceCase("Test String"), "Test string");
  },
});

Deno.test({
  name: "should sentence case non-alphanumeric separators",
  fn: (): void => {
    assertEquals(sentenceCase("dot.case"), "Dot case");
    assertEquals(sentenceCase("path/case"), "Path case");
  },
});
