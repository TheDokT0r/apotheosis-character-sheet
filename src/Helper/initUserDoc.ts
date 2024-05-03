import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseManager";

export default async function initUserDoc() {
  const user = getAuth().currentUser;
  if (!user) return;
  const db = getFirestore(firebaseApp);

  const defaultSkillData: SkillData = {
    pro: false,
    skill_level: 0,
  };

  const defaultStatus: StatusData = {
    total: null,
    current: null,
  };

  const basicUserData: CharacterSheet = {
    basic_info: {
      player_name: user.displayName ?? "",
      affiliation: "",
      archetype: "",
      character_name: "",
      species: "",
    },

    attributes: {
      physique: null,
      intellect: null,
      intuition: null,
      agility: null,
      psyche: null,
      speed: null,
      dodge: null,
      defense: null,
    },

    skills: {
      general: {
        encyclopedia: defaultSkillData,
        nature: defaultSkillData,
        science: defaultSkillData,
        drugs: defaultSkillData,
        scavenge: defaultSkillData,
        splicing: defaultSkillData,
      },
      sensory: {
        visualization: defaultSkillData,
        gut: defaultSkillData,
        cool: defaultSkillData,
        grit: defaultSkillData,
      },
      physical: {
        motorics: defaultSkillData,
        endurance: defaultSkillData,
        muscles: defaultSkillData,
        armaments: defaultSkillData,
        weaponry: defaultSkillData,
        brawl: defaultSkillData,
      },
      tech: {
        pilot: defaultSkillData,
        mechanics: defaultSkillData,
        interacting: defaultSkillData,
        techware: defaultSkillData,
        engineering: defaultSkillData,
        electroacuity: defaultSkillData,
      },
      magic: {
        arcane: defaultSkillData,
        alchemy: defaultSkillData,
        animation: defaultSkillData,
        infusion: defaultSkillData,
        evocation: defaultSkillData,
      },
    },

    status: {
      hp: defaultStatus,
      strain: defaultStatus,
      xp: defaultStatus,
      wounds: [],
    },
  };

  await setDoc(doc(db, "sheets", user.uid), basicUserData, { merge: true });
}
