<script lang="ts">
  export let color: string = "white";
  export let size: number = 1;

  const width = 300 * size + "px"; // Set width as needed
  const height = 90 * size + "px"; // Set height as needed
</script>

<div class="drop-shadow-2xl" style:height style:width>
  <h1 style:color>
    <slot />
  </h1>
</div>

<style lang="scss">
  @font-face {
    font-family: "TitleFont";
    src: url("@/fonts/Creepshow.otf");
    font-weight: normal;
    font-style: normal;
  }

  div {
    background-image: url("@/assets/Title-field.webp");
    background-size: cover; // Adjust the image size to cover the input
    background-position: center; // Center the background image
    font-size: 3rem;
    border: 1px solid black;
    border-radius: 5%;

    // Center div goes brrr
    display: grid;
    place-items: center;
  }

  h1 {
    user-select: none;
    display: table;
    border: none; // Remove border to make it seamless with the background image
    background-color: transparent;
    text-align: center;
    outline: none;
    font-family: "TitleFont";
    background: linear-gradient(#a7793e, #e1c289, #a7793e, #e1c289, #a7793e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
