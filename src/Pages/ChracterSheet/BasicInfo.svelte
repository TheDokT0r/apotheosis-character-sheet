<script lang="ts">
  import TextFieldWithTitle from "@/Components/TextFieldWithTitle.svelte";
  import GearInput from "@/Components/GearInput.svelte";
  import SplitInputField from "@/Components/SplitInputField.svelte";

  interface TextWithTitleData {
    title: string;
    placeholder: string;
    state: "major" | "minor";
  }

  const stats: TextWithTitleData[] = [
    { title: "Name", placeholder: "Your Name Here", state: "major" },
    { title: "Affiliation", placeholder: "Damn commie...", state: "major" },
    { title: "Archetype", placeholder: "Are you buff?", state: "major" },
    { title: "Player", placeholder: "Who the hell are you?", state: "minor" },
    { title: "Species", placeholder: "It feels kinda racist", state: "minor" },
  ];
</script>

<div class="basic-info-container">
  <div class="data-container">
    {#each stats as { title, state, placeholder }}
      <div
        class="input-container"
        style="transform: scale({state === 'major' ? 1 : 0.8});"
      >
        <TextFieldWithTitle {title} {placeholder} />
      </div>
    {/each}
  </div>

  <div class="speed">
    <GearInput title="Speed" />
  </div>

  <div class="xp-container">
    <h1>XP</h1>
    <SplitInputField
      element1Title="Total"
      element2Title="Available"
      rotation={0}
    />
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

    .speed {
      margin-top: -2.2rem;
    }
  }

  .xp-container {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 60%;
    left: 5%;
    justify-content: center;
    transform: scale(0.8);

    h1 {
      position: absolute;
      z-index: 2;
      font-family: Creepshow;
      font-size: 4em;
      opacity: 70%;
      text-align: center;
      top: 50%;
      left: -50%;
    }

    @media screen and (max-width: 480px) {
      position: relative;
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
