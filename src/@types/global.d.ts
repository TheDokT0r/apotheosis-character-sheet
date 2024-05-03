import type { BasicInfoHeader } from "@/Helper/basicInfoAssist";
import type { AttributeHeader } from "@/Helper/attributesAssist";
import type { FocusEventHandler } from "svelte/elements";

declare global {
  type BlurEvent = FocusEventHandler<HTMLInputElement> | null | undefined;

  type ThemePlate = "Rust" | "Silver" | "Gold" | "Bronze";
  type Hex = `#${string}`;

  interface SkillData {
    pro: boolean;
    skill_level: number;
  }

  interface StatusData {
    total: number | null;
    current: number | null;
  }

  interface CharacterSheet {
    basic_info: Record<BasicInfoHeader, string>;

    attributes: Record<AttributeHeader, number | null>;

    skills: {
      general: {
        encyclopedia: SkillData;
        nature: SkillData;
        science: SkillData;
        drugs: SkillData;
        scavenge: SkillData;
        splicing: SkillData;
      };
      sensory: {
        visualization: SkillData;
        gut: SkillData;
        cool: SkillData;
        grit: SkillData;
      };
      physical: {
        motorics: SkillData;
        endurance: SkillData;
        muscles: SkillData;
        armaments: SkillData;
        weaponry: SkillData;
        brawl: SkillData;
      };
      tech: {
        pilot: SkillData;
        mechanics: SkillData;
        interacting: SkillData;
        techware: SkillData;
        engineering: SkillData;
        electroacuity: SkillData;
      };
      magic: {
        arcane: SkillData;
        alchemy: SkillData;
        animation: SkillData;
        infusion: SkillData;
        evocation: SkillData;
      };
    };

    status: {
      hp: StatusData;
      strain: StatusData;
      xp: StatusData;
      wounds: string[];
    };

    notes: string;
  }
}

export {};
