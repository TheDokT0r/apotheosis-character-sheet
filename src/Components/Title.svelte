<script lang="ts">
  import themeToCSS from "@/Helper/themeToCSS";
  import adjustHex from "@/Helper/adjustHex";

  export let theme: ThemePlate = "Rust";
  export let width: string = "20rem";

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
    text-transform: uppercase;
  }
</style>
