<script lang="ts">
  import Title from "./Title.svelte";

  export let title: string;
  export let skills: string[];
  export let colors: string[];
  export let theme: ThemePlate;

  $: cssVarStyles = colors.join(", ");
</script>

<div>
  <Title theme={theme} size={0.8}>{title}</Title>

  <table>
    <tr style={`background-color: linear-gradient(${cssVarStyles});`}>
      <th>Skill Name</th>
      <th>Pro</th>
      <th>Skill Level</th>
    </tr>

    {#each skills as skill}
      <tr>
        <th class="skill">{skill}</th>
        <td><input type="checkbox" /></td>
        <td>
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
  table,
  th,
  td {
    user-select: none;
    border: 1px solid black;
  }

  th,
  tr {
    font-family: "Creepshow";
  }
</style>
