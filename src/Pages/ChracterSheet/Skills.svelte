<script lang="ts">
  import SkillTable from "@/Components/Skills/SkillTable.svelte";

  interface SkillsData {
    [key: string]: {
      skillNames: string[];
      color: ThemePlate;
    };
  }

  const skills: SkillsData = {
    general: {
      color: "Silver",
      skillNames: [
        "Encyclopedia",
        "Nature",
        "Science",
        "Drugs",
        "Scavenge",
        "Splicing",
      ],
    },

    sensory: {
      color: "Bronze",
      skillNames: ["Visualization", "Gut", "Cool", "Grit"],
    },

    physical: {
      color: "Gold",
      skillNames: [
        "Motorics",
        "Endurance",
        "Muscles",
        "Armaments",
        "Weaponry",
        "Brawl",
      ],
    },

    tech: {
      color: "Gold",
      skillNames: [
        "Pilot",
        "Mechanics",
        "Interacting",
        "Techware",
        "Engineering",
        "Electroacuity",
      ],
    },
  };
</script>

<div>
  {#each Object.entries(skills) as [key, { skillNames, color }]}
    <SkillTable skills={skillNames} theme={color} title={key} />
  {/each}
</div>
