import upperCase from "./upperCase.ts";
import normalCase from "./normalCase.ts";

/**
 * Convert a `string` to header case.
 *
 * Example:
 *
 * ```ts
 * headerCase("test string");
 * //=> "Test-String"
 * ```
 */
export default function headerCase(value: string, locale?: string): string {
  return normalCase(value, locale, "-").replace(/^.|-./g, function (
    m: string,
  ): string {
    return upperCase(m, locale);
  });
}
