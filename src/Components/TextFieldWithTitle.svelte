<script lang="ts">
  import TextField from "./TextField.svelte";
  import Title from "./Title.svelte";

  export let title: string;
</script>

<div>
  <Title>{title}</Title>
  <TextField {...$$restProps} />
</div>
