export type SpecialCasing = {
  regexp: RegExp;
  map: Record<string, string>;
};

export type LanguageSpecific = Record<string, SpecialCasing>;
