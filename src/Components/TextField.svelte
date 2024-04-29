<script lang="ts">
  import paperTape from "@/assets/Paper_Tape.webp";

  export let width: string = "10rem";
  export let height: string = "5rem";
  export let fontSize: string = "2rem";

  interface TapeLocation {
    top: number | string;
    left: number | string;
    rotation: number;
  }

  const rotation = Math.floor(Math.random() * 30) + 0;
</script>

<form class="form-container" style:width style:height>
  <img
    src={paperTape}
    alt="paper-tape"
    class="paper-tape"
    style="rotate: {rotation}deg;"
  />
  <input
    style="width: {width}; height: {height}; font-size: {fontSize}"
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
    bottom: -40%;
    left: 40%;
  }

  input {
    z-index: 1;
    background-image: url("@/assets/InputDesign.webp");
    background-size: cover; // Adjust the image size to cover the input
    background-position: center; // Center the background image
    border: none; // Remove border to make it seamless with the background image
    background-color: transparent;
    text-align: center;
    outline: none;
    font-family: Brush-King;
  }
</style>
