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

    return `linear-gradient(to right , ${secondaryColor}, ${mainColor}, ${thirdColor})`;
  };

  const textColor = adjustHex(css.tableBlock, 90);
</script>

<div
  class="skill-table-container"
  style="color: {textColor}; border-image: {css.tableBlock}"
>
  <Title width="100%" height="4rem" {theme}>{title}</Title>

  <table>
    <tr style="background-image: {tableGradientColor()};">
      <th>Skill Name</th>
      <th>Pro</th>
      <th>Skill Level</th>
    </tr>

    {#each skills as skill}
      <SkillLevel bind:theme bind:skill gradientColor={tableGradientColor()} />
    {/each}
  </table>
</div>

<style lang="scss">
  .skill-table-container {
    border: 4px outset;
    display: inline-block;

    min-width: 50%;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  table {
    border-style: outset;
    user-select: none;
    background-color: #ddcfbb;
    font-size: 2rem;
    width: 100%;
  }
</style>
