<script lang="ts">
  import themeToCSS from "@/Helper/themeToCSS";
  import "./SkillTable.scss";
  export let skill: string;
  export let theme: ThemePlate;
  export let gradientColor: string;

  $: css = themeToCSS[theme];

  const MAX_SKILL_LEVEL = 5 as const;
  let currentSkillLevel: number = 0;
  let pro: boolean = false;

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
  <td
    ><input
      style="width: 100%; border-color: {css.tableBlock}"
      bind:checked={pro}
      type="checkbox"
    /></td
  >
  <td>
    {#each Array(MAX_SKILL_LEVEL).fill("") as _, i}
      <input
        style="border-color: {css.tableBlock};"
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
    text-align: center;
    flex-direction: row;
  }

  input[type="checkbox"] {
    // transform: scale(4);
    // margin: 1.8rem;

    appearance: none;
    width: calc(100% / 5);
    height: 40px;

    border-width: 2px;
    border-style: outset;

    outline: none;

    &:checked {
      content: url("@/assets/check.svg");
      display: inline-block;
      background-color: #008000; /* Green color for checked state */
      color: #fff; /* White color for checkmark */
      border-radius: 3px;
    }
  }
</style>
