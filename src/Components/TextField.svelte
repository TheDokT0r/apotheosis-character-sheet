<script lang="ts">
  import paperTape from "@/assets/Paper_Tape.webp";
  import type { FocusEventHandler } from "svelte/elements";

  export let width: string = "10rem";
  export let height: string = "5rem";
  export let fontSize: string = "2rem";
  export let tape: boolean = true;
  export let onBlur: FocusEventHandler<HTMLInputElement> | null | undefined= undefined;

  const rotation = Math.floor(Math.random() * 30) + 0;
</script>

<form class="form-container" style:width style:height>
  {#if tape}
    <img
      src={paperTape}
      alt="paper-tape"
      class="paper-tape"
      style="rotate: {rotation}deg;"
    />
  {/if}
  <input
    on:blur|preventDefault={onBlur}
    style="font-size: {fontSize};"
    {...$$restProps}
  />
</form>

<style lang="scss">
  .form-container {
    position: relative;
  }

  .paper-tape {
    position: absolute;
    z-index: 2;
    width: 4rem;
    opacity: 70%;
    bottom: -5%;
    left: 40%;
  }

  input {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
    z-index: 1;
    background-image: url("@/assets/InputDesign.webp");
    background-size: cover; // Adjust the image size to cover the input
    background-position: center; // Center the background image
    border: none; // Remove border to make it seamless with the background image
    background-color: transparent;
    text-align: center;
    outline: none;
    font-family: Brush-King;
    width: 100%;
    height: 60%;
  }
</style>
