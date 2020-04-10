import { assertEquals } from "./deps.ts";

import lowerFirstCase from "../lowerFirstCase.ts";

Deno.test(function shouldConvertCase(): void {
  assertEquals(lowerFirstCase(null as any), "");
  assertEquals(lowerFirstCase("Test"), "test");
  assertEquals(lowerFirstCase("TEST"), "tEST");
});
