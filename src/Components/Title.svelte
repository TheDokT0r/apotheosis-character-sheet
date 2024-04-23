<script lang="ts">
  import themeToCSS from "@/Helper/themeToCSS";

  export let color: string = "white";
  export let size: number = 1;
  export const theme: ThemePlate = "Rust";

  const width = 300 * size + "px"; // Set width as needed
  const height = 90 * size + "px"; // Set height as needed

  const cssTheme = themeToCSS[theme];
  console.log(cssTheme);
</script>

<div
  class="drop-shadow-2xl"
  style:height
  style:width
  style="background-image: url({cssTheme.TitleBackground});"
>
  <h1 style:color>
    <slot />
  </h1>
</div>

<style lang="scss">
  div {
    // background-image: url("@/assets/Title-field.webp");
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
    font-family: "Creepshow";
    background: linear-gradient(
      0.25turn,
      #a7793e,
      #e1c289,
      #a7793e,
      #e1c289,
      #a7793e
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
