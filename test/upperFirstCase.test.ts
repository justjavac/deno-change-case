import { test, assertEquals } from "./deps.ts";

import upperFirstCase from "../upperFirstCase.ts";

test(function shouldConvertCase(): void {
  assertEquals(upperFirstCase(null), "");
  assertEquals(upperFirstCase("test"), "Test");
  assertEquals(upperFirstCase("TEST"), "TEST");
});
