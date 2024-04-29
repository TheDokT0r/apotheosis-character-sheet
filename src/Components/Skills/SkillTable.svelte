<script lang="ts">
  import Title from "../Title.svelte";
  import themeToCSS from "@/Helper/themeToCSS";
  import adjustHex from "@/Helper/adjustHex";
  import SkillLevel from "./SkillLevel.svelte";
  import "./SkillTable.scss";

  export let title: string;
  export let skills: string[];
  export let theme: ThemePlate;
  const width: string = "40rem";

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
  style="color: {textColor}; border-color: {css.tableBlock}"
>
  <Title {width} height="4rem" {theme}>{title}</Title>

  <table style:width>
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
  }

  table {
    border-style: outset;
    user-select: none;
    background-color: #ddcfbb;
    font-size: 2rem;
  }
</style>
