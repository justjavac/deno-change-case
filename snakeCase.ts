import normalCase from "./normalCase.ts";

/**
 * Convert a `string` to snake case.
 *
 * Example:
 *
 * ```ts
 * snakeCase("test string");
 * //=> "test_string"
 * ```
 */
export default function snakeCase(value: string, locale?: string): string {
  return normalCase(value, locale, "_");
}
