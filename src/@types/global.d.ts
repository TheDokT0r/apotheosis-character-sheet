import type { BasicInfoHeader } from "@/Helper/basicInfoAssist";

declare global {
  type ThemePlate = "Rust" | "Silver" | "Gold" | "Bronze";
  type Hex = `#${string}`;

  interface SkillData {
    pro: boolean;
    skill_level: 0 | 5;
  }

  interface StatusData {
    total: number | null;
    current: number | null;
  }

  interface CharacterSheet {
    basic_info: Record<BasicInfoHeader, string>;

    attributes: {
      intellect: number | null;
      intuition: number | null;
      psyche: number | null;
      agility: number | null;
      physique: number | null;
      speed: number | null;
      dodge: number | null;
      defense: number | null;
    };

    skills: {
      general: SkillData;
      sensory: SkillData;
      physical: SkillData;
      tech: SkillData;
      magic: SkillData;
    };

    status: {
      hp: StatusData;
      strain: StatusData;
      xp: StatusData;
      wounds: string[];
    };
  }
}

export {};
