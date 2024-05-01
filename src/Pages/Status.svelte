<script lang="ts">
  import SplitInputField from "@/Components/SplitInputField.svelte";
  import SplitSquareInput from "@/Components/SplitSquareInput.svelte";
  import TextField from "@/Components/TextField.svelte";
</script>

<div class="status-container">
  <div class="xp-container">
    <h1>XP</h1>
    <SplitInputField
      element1Title="Total"
      element2Title="Available"
      rotation={0}
    />
  </div>

  <div>
    <SplitSquareInput />
  </div>
</div>

<style lang="scss">
  .status-container {
    position: static;
    margin-top: 10em;

    .xp-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: -10%;
      transform: scale(0.8);
      padding: 1em;

      h1 {
        position: relative;
        font-family: Creepshow;
        font-size: 4em;
        opacity: 70%;
        text-align: center;
      }

      @media screen and (max-width: 480px) {
        position: relative;
        margin-top: 20%;
      }
    }
  }
</style>
