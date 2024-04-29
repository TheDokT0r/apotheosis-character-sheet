<script lang="ts">
  import "./SkillTable.scss";
  export let gradientColor: string;
  export let skill: string;

  const MAX_SKILL_LEVEL: number = 5;
  let currentSkillLevel: number = 0;

  const setSkillValue = (selectedLevel: number) => {
    if (currentSkillLevel === selectedLevel) {
      currentSkillLevel = 0;
      return;
    }

    currentSkillLevel = selectedLevel;
  };

  $: isChecked = (level: number) => level <= currentSkillLevel;
</script>

<tr>
  <th style="background-image: {gradientColor};">{skill}</th>
  <td style="border-image: linear-gradient(to right, #ff7e5f, #feb47b) 1;"
    ><input type="checkbox" /></td
  >
  <td>
    {#each Array(MAX_SKILL_LEVEL).fill("") as _, i}
      <input
        type="checkbox"
        checked={isChecked(i + 1)}
        on:change={() => setSkillValue(i + 1)}
      />
    {/each}
  </td>
</tr>

<style lang="scss">
  td {
    border-width: 2px;
    border-style: outset;
    position: relative; // Ensure relative positioning for the checkbox
    padding: 0; // Remove padding to make checkbox cover the entire td
    text-align: center;
  }
</style>
