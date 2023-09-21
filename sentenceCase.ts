import normalCase from "./normalCase.ts";
import upperFirstCase from "./upperFirstCase.ts";

/**
 * Convert a `string` to sentence case.
 *
 * Example:
 *
 * ```ts
 * sentenceCase("test string");
 * //=> "Test string"
 * ```
 */
export default function sentenceCase(value: string, locale?: string): string {
  return upperFirstCase(normalCase(value, locale), locale);
}
