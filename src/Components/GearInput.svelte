<script lang="ts">
  import gear1 from "@/assets/gear1.webp";
  import gear2 from "@/assets/gear2.webp";
  import Title from "./Title.svelte";

  export let title: string;
  export let gear: 1 | 2 = 1;
</script>

<div class="gear-container">
  <img src={gear === 1 ? gear1 : gear2} alt="gear_img" />
  <input type="number" {...$$restProps} />
  <div class="title-container">
    <Title theme="Rust" width="100%" height="100%" fontSize="1.5em"
      >{title}</Title
    >
  </div>
</div>

<style lang="scss">
  .gear-container {
    width: 10vw;
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
      transform: translate(-50%, -50%) scale(0.5); /* Center the input within the image */
      text-align: center;
      font-size: 2em;
      font-family: Brush-King;
    }

    input[type="number"] {
      -moz-appearance: textfield; /* Firefox */
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0; /* Optional - if you want to remove the margin */
    }
  }
</style>
