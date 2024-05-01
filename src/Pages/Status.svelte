<script lang="ts">
  import SplitInputField from "@/Components/SplitInputField.svelte";
  import SplitSquareInput from "@/Components/SplitSquareInput.svelte";
  import TextField from "@/Components/TextField.svelte";
  import heart from "@/assets/heart.webp";
  import brokenHeart from "@/assets/broken_heart.webp";
  import Wounds from "./ChracterSheet/Wounds.svelte";
</script>

<div class="status-container">
  <div>
    <img src={heart} alt="heat_img" />
    <SplitSquareInput />
  </div>
  <div>
    <img src={brokenHeart} alt="heat_img" />
    <SplitSquareInput />
  </div>
  <div>
    <h2>XP</h2>
    <SplitSquareInput />
  </div>

  <Wounds />
</div>

<style lang="scss">
  .status-container {
    display: grid;
    place-items: center;

    h2 {
      position: relative;
      font-family: Creepshow;
      font-size: 3em;
      user-select: none;
    }

    img {
      transform: translate(-5%, 50%) rotate(-10deg);
      width: 4em;
      bottom: 0;
    }
  }
</style>
