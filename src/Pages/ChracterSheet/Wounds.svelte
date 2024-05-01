<script lang="ts">
  import TextField from "@/Components/TextField.svelte";
  import human from "@/assets/Human.png";
  import { PlusCircled } from "@iconslib/svelte/radix";
</script>

<div class="wounds-container">
  <button><PlusCircled /></button>
  <div class="wounds">
    <TextField placeholder="Wound" width="20rem" fontSize="1em" />
  </div>
  <img class="human-logo" src={human} alt="human_img" />
</div>

<style lang="scss">
  .wounds-container {
    .wounds {
    }

    .human-logo {
      width: 20%;
      height: 20%;
    }
  }
</style>
