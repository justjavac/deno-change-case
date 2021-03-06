import lowerCase from "./lowerCase.ts";

export default function (str: string, locale?: string): string {
  if (str == null) {
    return "";
  }

  str = String(str);

  return lowerCase(str.charAt(0), locale) + str.substr(1);
}
