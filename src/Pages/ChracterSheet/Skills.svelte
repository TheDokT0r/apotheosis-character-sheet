<script lang="ts">
  import SkillTable from "@/Components/Skills/SkillTable.svelte";
  import {
    getCharacterSheet,
    updateCharacterSheet,
  } from "@/Helper/dataManager";

  const tableToTheme: Record<string, ThemePlate> = {
    general: "Silver",
    sensory: "Bronze",
    physical: "Gold",
    tech: "Rust",
    magic: "Bronze",
  };

  const updateSkills = async (
    allSkills: Object,
    skills: { [key: string]: SkillData },
    title: string
  ) => {
    // @ts-ignore
    allSkills[title] = skills;
    allSkills = allSkills;
    await updateCharacterSheet(allSkills, "skills");
  };

  const getSkills = async () => {
    const sheet = await getCharacterSheet();
    return sheet!.skills;
  };
</script>

{#await getSkills() then skillsTables}
  <div>
    {#each Object.entries(skillsTables) as [topic, skills]}
      <SkillTable
        updateSkills={(skillsData) =>
          updateSkills(skillsTables, skillsData, topic)}
        allSkills={skillsTables}
        bind:skills
        theme={tableToTheme[topic]}
        bind:title={topic}
      />
    {/each}
  </div>
{/await}
