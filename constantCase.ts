import upperCase from "./upperCase.ts";
import snakeCase from "./snakeCase.ts";

export default function constantCase(value: string, locale?: string): string {
  return upperCase(snakeCase(value, locale), locale);
}
