<script lang="ts">
  import Title from "../Title.svelte";
  import themeToCSS from "@/Helper/themeToCSS";
  import adjustHex from "@/Helper/adjustHex";
  import SkillLevel from "./SkillLevel.svelte";
  import "./SkillTable.scss";

  export let title: string;
  export let skills: string[];
  export let theme: ThemePlate;

  const css = themeToCSS[theme];

  const tableGradientColor = () => {
    const mainColor = css.tableBlock;
    const secondaryColor = adjustHex(mainColor, -10);
    const thirdColor = adjustHex(mainColor, 10);

    return `linear-gradient(0.25turn, ${secondaryColor}, ${mainColor}, ${thirdColor})`;
  };

  const textColor = adjustHex(css.tableBlock, 90);
</script>

<div style="color: {textColor}; border-image: {tableGradientColor()};">
  <Title {theme} size={0.8}>{title}</Title>

  <table>
    <tr style="background-image: {tableGradientColor()};">
      <th>Skill Name</th>
      <th>Pro</th>
      <th>Skill Level</th>
    </tr>

    {#each skills as skill}
      <SkillLevel bind:skill gradientColor={tableGradientColor()} />
    {/each}
  </table>
</div>

<style lang="scss">
  table {
    border-width: 4px;
    border-style: inset;
    user-select: none;
    background-color: #ddcfbb;
  }

  table,
  td {
    overflow: hidden;
  }
</style>
