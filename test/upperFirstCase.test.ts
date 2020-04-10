import { assertEquals } from "./deps.ts";

import upperFirstCase from "../upperFirstCase.ts";

Deno.test(function shouldConvertCase(): void {
  assertEquals(upperFirstCase(null as unknown as string), "");
  assertEquals(upperFirstCase("test"), "Test");
  assertEquals(upperFirstCase("TEST"), "TEST");
});
