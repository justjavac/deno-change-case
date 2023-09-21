import upperCase from "./upperCase.ts";
import lowerCase from "./lowerCase.ts";

/**
 * Convert a `string` to swap case.
 *
 * Example:
 *
 * ```ts
 * swapCase("test string");
 * //=> "TEST STRING"
 *
 * swapCase("Test String");
 * //=> "tEST sTRING"
 * ```
 */
export default function (str: string, locale?: string): string {
  if (str == null) {
    return "";
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const c: string = str[i];
    const u: string = upperCase(c, locale);

    result += u === c ? lowerCase(c, locale) : u;
  }

  return result;
}
