<script lang="ts">
  import inputBackground from "@/assets/InputDesign.webp";
  let item1Value: number;
  let item2Value: number;
</script>

<div style="background-image: url({inputBackground});">
  <input bind:value={item1Value} type="number" />
  <p class="splitter">/</p>
  <input bind:value={item2Value} type="number" />
</div>

<style lang="scss">
  div {
    justify-content: center;
    display: flex;
    width: 15em;
    height: 5em;
    background-size: cover; // Adjust the image size to cover the input
    background-position: center; // Center the background image
    border: none; // Remove border to make it seamless with the background image
    background-color: transparent;
  }

  .splitter {
    z-index: 1;
    font-family: Brush-King;
    font-size: 2em;
    margin-top: 10%;
  }

  input {
    z-index: 1;
    position: relative;
    width: 40%;
    height: 100%;
    outline: none;
    border: none;
    background: none;
    text-align: center;
    font-family: Brush-King;
    text-align: center;
    font-size: 1.2em;

    &[type="number"] {
      appearance: textfield;
    }
  }
</style>
