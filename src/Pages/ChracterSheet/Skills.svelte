<script lang="ts">
  import SkillTable from "@/Components/Skills/SkillTable.svelte";

  interface SkillsData {
    [key: string]: {
      skills: string[];
      theme: ThemePlate;
    };
  }

  const skillsData: SkillsData = {
    general: {
      theme: "Silver",
      skills: [
        "Encyclopedia",
        "Nature",
        "Science",
        "Drugs",
        "Scavenge",
        "Splicing",
      ],
    },

    sensory: {
      theme: "Bronze",
      skills: ["Visualization", "Gut", "Cool", "Grit"],
    },

    physical: {
      theme: "Gold",
      skills: [
        "Motorics",
        "Endurance",
        "Muscles",
        "Armaments",
        "Weaponry",
        "Brawl",
      ],
    },

    tech: {
      theme: "Gold",
      skills: [
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
  {#each Object.entries(skillsData) as [title, { skills, theme }]}
    <SkillTable bind:skills bind:theme bind:title />
  {/each}
</div>