<script lang="ts">
  import Title from "./Title.svelte";
  import themeToCSS from "@/Helper/themeToCSS";
  import adjustHex from "@/Helper/adjustHex";

  export let title: string;
  export let skills: string[];
  export let theme: ThemePlate;

  const css = themeToCSS[theme];

  const tableBorderColors = () => {
    const mainColor = css.tableBlock;
    const secondaryColor = adjustHex(mainColor, -20);
    const thirdColor = adjustHex(mainColor, 20);

    return `linear-gradient(0.25turn, ${mainColor}, ${secondaryColor}, ${thirdColor})`;
  };
</script>

<div>
  <Title {theme} size={0.8}>{title}</Title>

  <table style="border-image: {tableBorderColors()};">
    <tr style="border-image: {tableBorderColors()};">
      <th style="border-image: {tableBorderColors()};">Skill Name</th>
      <th style="border-image: {tableBorderColors()};">Pro</th>
      <th style="border-image: {tableBorderColors()};">Skill Level</th>
    </tr>

    {#each skills as skill}
      <tr>
        <th style="border-image: {tableBorderColors()};" class="skill"
          >{skill}</th
        >
        <td style="border-image: {tableBorderColors()};"
          ><input type="checkbox" /></td
        >
        <td style="border-image: {tableBorderColors()};">
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </td>
      </tr>
    {/each}
  </table>
</div>

<style lang="scss">
  table {
    border-width: 4px;
    border-style: inset;
    user-select: none;
  }

  th,
  td {
    border-width: 2px;
    border-style: inset;
    user-select: none;
  }

  th,
  tr {
    font-family: "Creepshow";
    background: transparent;
  }
</style>
