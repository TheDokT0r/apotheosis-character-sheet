<script lang="ts">
  import themeToCSS from "@/Helper/themeToCSS";
  import adjustHex from "@/Helper/adjustHex";

  export let theme: ThemePlate = "Rust";
  export let width: string = "20rem";
  export let height: string = "100%";
  export let fontSize: string = "4rem";

  const cssTheme = themeToCSS[theme];

  const getHexColors = () => {
    const ogColor = cssTheme.titleText;

    const mainColor = adjustHex(ogColor, 50);
    const secondaryColor = adjustHex(ogColor, 90);

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
  class="shadow-inner title-container"
  style="background-image: url({cssTheme.titleBackground});"
  style:width
  style:height
>
  <h1
    class="drop-shadow-xl"
    style="background-image: {getHexColors()}; font-size: {fontSize}"
  >
    <slot />
  </h1>
</div>

<style lang="scss">
  .title-container {
    margin: 0 auto;
  }

  h1 {
    background-size: cover; // Adjust the image size to cover the input
    background-position: center; // Center the background image
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 120px;
    height: 100%;
    width: 100%;
    user-select: none;
    border: none; // Remove border to make it seamless with the background image
    background-color: transparent;
    text-align: center;
    outline: none;
    font-family: Creepshow;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
</style>
