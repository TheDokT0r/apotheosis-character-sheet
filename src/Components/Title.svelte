<script lang="ts">
  export let label: string;
  export let color: string = "white";
  export let size: number = 1;

  const width = 300 * size + "px"; // Set width as needed
  const height = 70 * size + "px"; // Set height as needed
</script>

<div>
  <h1 style:color style:height style:width>{label}</h1>
</div>

<style lang="scss">
  h1 {
    background-image: url("@/assets/Title-field.png");
    background-size: cover; // Adjust the image size to cover the input
    background-position: center; // Center the background image
    border: none; // Remove border to make it seamless with the background image
    background-color: transparent;
    text-align: center;
    outline: none;
  }
</style>
