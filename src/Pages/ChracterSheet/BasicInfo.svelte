<script lang="ts">
  import TextFieldWithTitle from "@/Components/TextFieldWithTitle.svelte";

  interface TextWithTitleData {
    title: string;
    placeholder: string;
    state: "major" | "minor";
  }

  const stats: TextWithTitleData[] = [
    { title: "Name", placeholder: "Your Name Here", state: "major" },
    { title: "Affiliation", placeholder: "Damn commie...", state: "major" },
    { title: "Archetype", placeholder: "Are you buff?", state: "major" },
    { title: "Player", placeholder: "Who the hell are you???", state: "minor" },
    { title: "Species", placeholder: "It feels kinda racist", state: "minor" },
  ];
</script>

<div class="basic-info-container">
  {#each stats as { title, placeholder, state }}
    <div
      class="input-container"
      style="transform: scale({state === 'major' ? 1 : 0.8});"
    >
      <TextFieldWithTitle {title} {placeholder} />
    </div>
  {/each}
</div>

<style lang="scss">
  .basic-info-container {
    display: flex;
    flex-wrap: wrap; // Wrap items onto multiple lines if necessary
    justify-content: center; // Center items horizontally
    align-items: center; // Center items vertically
  }

  .input-container {
    width: calc(
      33.33% - 20px
    ); // Three items per row with a small gap between them
    margin-bottom: 20px; // Adjust as needed

    @media screen and (max-width: 768px) {
      width: calc(50% - 20px); // Two items per row on smaller screens
    }

    @media screen and (max-width: 480px) {
      width: 100%; // One item per row on extra small screens
      justify-content: center; // Center items horizontally when there's only one item per row
    }
  }
</style>
