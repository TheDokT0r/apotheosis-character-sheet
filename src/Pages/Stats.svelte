<script lang="ts">
  import SplitInputField from "@/Components/SplitInputField.svelte";
  import GearInput from "@/Components/GearInput.svelte";
  import Title from "@/Components/Title.svelte";

  const proficiencyStats = ["PSY", "INT", "INL"];
  const rankStats = ["AGL", "PHY"];
</script>

<div class="stats-container">
  <div class="data-container gears">
    {#each proficiencyStats as title}
      <div class="gear-container">
        <GearInput {title} gear={1} />
      </div>
    {/each}
  </div>

  <div class="data-container gears">
    {#each rankStats as title}
      <div class="gear-container">
        <GearInput {title} gear={2} />
      </div>
    {/each}
  </div>

  <div class="data-container gears">
    <GearInput title="Speed" />
  </div>
</div>

<div class="dodge-defense-input">
  <SplitInputField
    element1Title="Dodge"
    element2Title="Defense"
    element1Max={5}
    element1Min={-5}
    element2Max={5}
    element2Min={-5}
    rotation={-45}
  />
</div>

<style lang="scss">
  .stats-container {
    position: relative;

    @media screen and (max-width: 480px) {
      display: grid;
      place-items: center;
    }
  }

  .dodge-defense-input {
    position: absolute;
    top: 70%;
    left: 10%;

    @media screen and (max-width: 480px) {
      position: relative;
      display: flex;
    }
  }

  .data-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; // Wrap items onto multiple lines if necessary
    justify-content: center; // Center items horizontally
    align-items: center; // Center items vertically
    margin: 1rem;

    .gear-container {
      margin: 2rem;
    }
  }
</style>
