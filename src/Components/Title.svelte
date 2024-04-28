<script lang="ts">
  import themeToCSS from "@/Helper/themeToCSS";
  import adjustHex from "@/Helper/adjustHex";

  export let color: string = "white";
  export let size: number = 1;
  export let theme: ThemePlate = "Rust";

  const width = 300 * size + "px"; // Set width as needed
  const height = 90 * size + "px"; // Set height as needed

  const cssTheme = themeToCSS[theme];

  const getHexColors = () => {
    const mainColor = cssTheme.titleText;
    const secondaryColor = adjustHex(mainColor, 20);

    const hexValues = [
      mainColor,
      secondaryColor,
      mainColor,
      secondaryColor,
    ].join(", ");

    return `linear-gradient(0.25turn, ${hexValues})`;
  };
</script>

<div
  class="drop-shadow-2xl"
  style:height
  style:width
  style="background-image: url({cssTheme.titleBackground});"
>
  <h1 style="background-image: {getHexColors()};">
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
