<script lang="ts">
  import gear1 from "@/assets/gear1.webp";
  import gear2 from "@/assets/gear2.webp";
  import Title from "./Title.svelte";

  export let title: string;
  export let gear: 1 | 2 = 1;

  export let value: number | undefined;
  export let onBlur: BlurEvent =
    undefined;
</script>

<div class="gear-container drop-shadow-xl">
  <img src={gear === 1 ? gear1 : gear2} alt="gear_img" />
  <input
    on:blur={onBlur}
    bind:value
    style="transform: translate(-50%, -50%) scale({gear === 1 ? 0.5 : 0.6});"
    type="number"
    {...$$restProps}
  />
  <div class="title-container">
    <Title theme="Rust" width="100%" height="100%" fontSize="2em">{title}</Title
    >
  </div>
</div>

<style lang="scss">
  .gear-container {
    width: 10rem;
    position: relative; /* Establishes positioning context */

    .title-container {
      position: absolute;
      width: 80%;
      height: 30%;
      transform: translate(15%, -20%);
    }

    img {
      vertical-align: middle;
      width: 100%;
      height: 100%;
      position: relative; /* Ensures positioning of input relative to the image */
    }
    input {
      background-color: #dcceb9;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top: 50%; /* Positioning input in the middle vertically */
      left: 50%; /* Positioning input in the middle horizontally */
      /* Center the input within the image */
      text-align: center;
      font-size: 3em;
      font-family: Brush-King;
      &[type="number"] {
        appearance: textfield;
      }
    }
  }
</style>
