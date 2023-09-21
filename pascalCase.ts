import camelCase from "./camelCase.ts";
import upperFirstCase from "./upperFirstCase.ts";

/**
 * Convert a `string` to pascal case.
 *
 * Example:
 *
 * ```ts
 * pascalCase("test string");
 * //=> "TestString"
 * ```
 */
export default function pascalCase(
  value: string,
  locale?: string,
  mergeNumbers?: boolean,
): string {
  return upperFirstCase(camelCase(value, locale, mergeNumbers), locale);
}
