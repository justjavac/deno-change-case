import upperCase from "./upperCase.ts";

/**
 * Convert a `string` to upper case.
 *
 * Example:
 *
 * ```ts
 * upperFirstCase("test string");
 * //=> "Test string"
 * ```
 */
export default function (str: string, locale?: string): string {
  if (str == null) {
    return "";
  }

  str = String(str);

  return upperCase(str.charAt(0), locale) + str.substr(1);
}
