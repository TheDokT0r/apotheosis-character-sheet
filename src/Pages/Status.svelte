<script lang="ts">
  import SplitInputField from "@/Components/SplitInputField.svelte";
  import SplitSquareInput from "@/Components/SplitSquareInput.svelte";
  import TextField from "@/Components/TextField.svelte";
  import heart from "@/assets/heart.webp";
  import brokenHeart from "@/assets/broken_heart.webp";
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

  <div class="health-stats-container">
    <div>
      <img src={heart} alt="heat_img" />
      <SplitSquareInput />
    </div>
    <div>
      <img src={brokenHeart} alt="heat_img" />
      <SplitSquareInput />
    </div>
  </div>
</div>

<style lang="scss">
  .status-container {
    position: relative;
    display: flex;
    margin-top: 10em;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    .xp-container {
      position: relative;
      margin-top: -10%;
      padding: 1em;

      h1 {
        position: relative;
        font-family: Creepshow;
        font-size: 4em;
        opacity: 70%;
        padding: 50px;
        user-select: none;
      }

      @media screen and (max-width: 480px) {
        position: relative;
        margin-top: 20px;
      }
    }

    .health-stats-container {
      position: relative;

      img {
        transform: translate(-5%, 50%) rotate(-10deg);
        width: 4em;
        bottom: 0;
      }
    }
  }
</style>
