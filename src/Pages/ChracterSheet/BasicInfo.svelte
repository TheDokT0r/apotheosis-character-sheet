<script lang="ts">
  import GearInput from "@/Components/GearInput.svelte";
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

  const basicPlayerInfoTitles: string[] = ["PSY", "INT", "INL", "AGL", "PHY"];
</script>

<div class="basic-info-container">
  <div class="data-container">
    {#each stats as { title, placeholder, state }}
      <div
        class="input-container"
        style="transform: scale({state === 'major' ? 1 : 0.8});"
      >
        <TextFieldWithTitle {title} {placeholder} />
      </div>
    {/each}
  </div>

  <div class="data-container gears">
    {#each basicPlayerInfoTitles as title}
      <div class="gear-container">
        <GearInput {title} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .basic-info-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; // Wrap items onto multiple lines if necessary
    justify-content: center; // Center items horizontally
    align-items: center; // Center items vertically

    .data-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap; // Wrap items onto multiple lines if necessary
      justify-content: center; // Center items horizontally
      align-items: center; // Center items vertically
      margin: 1rem;
    }

    .gears {
      margin-top: -2.2rem;
    }

    .gear-container {
      margin: 2rem;
    }
  }

  .input-container {
    width: calc(
      33.33% - 20px
    ); // Three items per row with a small gap between them
    margin-bottom: 20px; // Adjust as needed

    @media screen and (max-width: 480px) {
      width: 100%; // One item per row on extra small screens
      justify-content: center; // Center items horizontally when there's only one item per row
    }
  }
</style>
