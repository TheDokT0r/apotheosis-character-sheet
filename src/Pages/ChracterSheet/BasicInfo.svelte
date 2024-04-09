<script lang="ts">
  import TextField from "@/Components/TextField.svelte";
import TextFieldWithTitle from "@/Components/TextFieldWithTitle.svelte";
  let playerName: string;

  $: console.log(playerName);
</script>

<div>
  <TextFieldWithTitle
    placeholder="Your Name Here"
    title="Name"
  />
</div>
