import upperCase from "./upperCase.ts";
import normalCase from "./normalCase.ts";

/**
 * Convert a `string` to title case.
 *
 * Example:
 *
 * ```ts
 * titleCase("test string");
 * //=> "Test String"
 * ```
 */
export default function titleCase(value: string, locale?: string): string {
  return normalCase(value, locale).replace(/^.| ./g, function (
    m: string,
  ): string {
    return upperCase(m, locale);
  });
}
