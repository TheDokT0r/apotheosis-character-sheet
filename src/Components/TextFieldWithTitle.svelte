<script lang="ts">
  import TextField from "./TextField.svelte";
  import Title from "./Title.svelte";
  import type { FocusEventHandler } from "svelte/elements";

  export let title: string;
  export let onBlur: FocusEventHandler<HTMLInputElement> | null | undefined =
    undefined;
</script>

<div class="comp-container">
  <Title theme="Rust" width="90%" fontSize="4rem" height="5rem">{title}</Title>
  <TextField fontSize="1rem" width="100%" {onBlur} {...$$restProps} />
</div>

<style lang="scss">
  .comp-container {
    width: 20rem;
  }
</style>
