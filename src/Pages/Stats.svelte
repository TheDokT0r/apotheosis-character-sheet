<script lang="ts">
  import DodgeDefenseInput from "@/Components/DodgeDefenseInput.svelte";
  import GearInput from "@/Components/GearInput.svelte";
  import Title from "@/Components/Title.svelte";

  const proficiencyStats = ["PSY", "INT", "INL"];
  const rankStats = ["AGL", "PHY"];
</script>

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

<div class="dodge-defense-input">
  <DodgeDefenseInput />
</div>

<style lang="scss">
  .dodge-defense-input {
    position: absolute;
    top: 70%;
    left: 10%;

    @media screen and (max-width: 480px) {
      position: relative;
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
