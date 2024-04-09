<script lang="ts">
  export let title: string;
  export let skills: string[];
</script>

<table>
  <tr>
    <th>Skill Name</th>
    <th>Pro</th>
    <th>Skill Level</th>
  </tr>

  {#each skills as skills}
    <tr>
      <th>{skills}</th>
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

<style lang="scss">
  table,
  th,
  td {
    border: 1px solid black;
  }
</style>
