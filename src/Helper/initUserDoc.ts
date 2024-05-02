import { doc, getFirestore, setDoc } from "firebase/firestore";
import type { User } from "firebase/auth";
import type { FirebaseApp } from "firebase/app";

export default async function initUserDoc(user: User, app: FirebaseApp) {
  if (!user) return;
  const db = getFirestore(app);

  const defaultSkillData: SkillData = {
    pro: false,
    skill_level: 0,
  };

  const defaultStatus: StatusData = {
    total: null,
    current: null,
  };

  const basicUserData: UserData = {
    basic_info: {
      player_names: user.displayName ?? "",
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
  console.table({ db, uid: user.uid, app });
  await setDoc(doc(db, "sheets", user.uid), basicUserData, { merge: true });
}
