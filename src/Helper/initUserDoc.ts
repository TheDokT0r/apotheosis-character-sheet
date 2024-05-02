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
      physique: undefined,
      intellect: undefined,
      intuition: undefined,
      agility: undefined,
      psyche: undefined,
      speed: undefined,
      dodge: undefined,
      defense: undefined,
    },

    skills: {
      general: defaultSkillData,
      sensory: defaultSkillData,
      physical: defaultSkillData,
      tech: defaultSkillData,
      magic: defaultSkillData,
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
