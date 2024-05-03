export const allBasicInfoTypes = [
  "character_name",
  "affiliation",
  "archetype",
  "player_name",
  "species",
] as const;

/** All optional basic info header data types */
export type BasicInfoHeader = (typeof allBasicInfoTypes)[number];
