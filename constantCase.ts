import upperCase from "./upperCase.ts";
import snakeCase from "./snakeCase.ts";

/**
 * Convert a `string` to constant case.
 *
 * Example:
 *
 * ```ts
 * constantCase("test string");
 * //=> "TEST_STRING"
 * ```
 */
export default function constantCase(value: string, locale?: string): string {
  return upperCase(snakeCase(value, locale), locale);
}
