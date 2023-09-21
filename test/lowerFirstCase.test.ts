// deno-lint-ignore-file no-explicit-any
import { assertEquals } from "./deps.ts";

import lowerFirstCase from "../lowerFirstCase.ts";

Deno.test("should convert case", function (): void {
  assertEquals(lowerFirstCase(null as any), "");
  assertEquals(lowerFirstCase("Test"), "test");
  assertEquals(lowerFirstCase("TEST"), "tEST");
});
