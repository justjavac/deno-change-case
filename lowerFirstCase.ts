import lowerCase from "./lowerCase.ts";

/**
 * Convert a `string` to lower case with the first character in upper case.
 *
 * Example:
 *
 * ```ts
 * lowerFirstCase("test string");
 * //=> "Test string"
 * ```
 */
export default function (str: string, locale?: string): string {
  if (str == null) {
    return "";
  }

  str = String(str);

  return lowerCase(str.charAt(0), locale) + str.substr(1);
}
