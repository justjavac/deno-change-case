import { test, assertEquals } from "./deps.ts";

import lowerFirstCase from "../lowerFirstCase.ts";

test(function shouldConvertCase(): void {
  assertEquals(lowerFirstCase(null), "");
  assertEquals(lowerFirstCase("Test"), "test");
  assertEquals(lowerFirstCase("TEST"), "tEST");
});
