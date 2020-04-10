import { assertEquals } from "./deps.ts";

import swapCase from "../swapCase.ts";

Deno.test({
  name: "should swap the case of strings",
  fn: (): void => {
    assertEquals(swapCase(null as any), "");
    assertEquals(swapCase("test"), "TEST");
    assertEquals(swapCase("TEST"), "test");
    assertEquals(swapCase("PascalCase"), "pASCALcASE");
    assertEquals(swapCase("Iñtërnâtiônàlizætiøn"), "iÑTËRNÂTIÔNÀLIZÆTIØN");
  },
});

Deno.test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(swapCase("My String", "tr"), "mY sTRİNG");
  },
});
