import normalCase from "./normalCase.ts";

/**
 * Convert a `string` to param case.
 *
 * Example:
 *
 * ```ts
 * paramCase("test string");
 * //=> "test-string"
 * ```
 */
export default function paramCase(value: string, locale?: string): string {
  return normalCase(value, locale, "-");
}
