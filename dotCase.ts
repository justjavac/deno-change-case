import normalCase from "./normalCase.ts";

/**
 * Convert a `string` to dot case.
 *
 * Example:
 *
 * ```ts
 * dotCase("test string");
 * //=> "test.string"
 * ```
 */
export default function dotCase(value: string, locale?: string): string {
  return normalCase(value, locale, ".");
}
