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

  $: console.log(currentSkillLevel);
</script>

<tr>
  <th style="background-image: {gradientColor};">{skill}</th>
  <td><input type="checkbox" /></td>
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
    border-style: inset;
  }
</style>
