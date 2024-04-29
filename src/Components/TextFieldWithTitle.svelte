<script lang="ts">
  import TextField from "./TextField.svelte";
  import Title from "./Title.svelte";

  export let title: string;
</script>

<div class="comp-container">
  <Title theme="Rust" width="90%" fontSize="4rem" height="5rem">{title}</Title>
  <TextField fontSize="1rem" width="100%" {...$$restProps} />
</div>

<style lang="scss">
  .comp-container {
    width: 20rem;
  }
</style>
