import normalCase from "./normalCase.ts";

/**
 * Convert a `string` to path case.
 *
 * Example:
 *
 * ```ts
 * pathCase("test string");
 * //=> "test/string"
 * ```
 */
export default function (value: string, locale?: string): string {
  return normalCase(value, locale, "/");
}
