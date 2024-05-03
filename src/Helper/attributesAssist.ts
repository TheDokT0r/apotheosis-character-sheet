export const allAttributes = [
  "intellect",
  "intuition",
  "psyche",
  "agility",
  "physique",
  "speed",
  "dodge",
  "defense",
] as const;

export type AttributeHeader = (typeof allAttributes)[number];
