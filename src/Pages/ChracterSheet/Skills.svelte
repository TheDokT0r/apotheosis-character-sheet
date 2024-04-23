<script lang="ts">
  import SkillTable from "@/Components/SkillTable.svelte";
</script>

<div>
  <SkillTable
    theme="Gold"
    colors={["black", "yellow", "green"]}
    title="General"
    skills={[
      "Encyclopedia",
      "Nature",
      "Science",
      "Drugs",
      "Scavenge",
      "Splicing",
    ]}
  />
</div>
