import { test, assertEquals } from "./deps.ts";

import swapCase from "../swapCase.ts";

test({
  name: "should swap the case of strings",
  fn: (): void => {
    assertEquals(swapCase(null), "");
    assertEquals(swapCase("test"), "TEST");
    assertEquals(swapCase("TEST"), "test");
    assertEquals(swapCase("PascalCase"), "pASCALcASE");
    assertEquals(swapCase("Iñtërnâtiônàlizætiøn"), "iÑTËRNÂTIÔNÀLIZÆTIØN");
  }
});

test({
  name: "should support locales",
  fn: (): void => {
    assertEquals(swapCase("My String", "tr"), "mY sTRİNG");
  }
});
