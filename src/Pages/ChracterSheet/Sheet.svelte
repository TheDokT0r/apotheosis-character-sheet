<script>
  import BasicInfo from "./BasicInfo.svelte";
  import Skills from "./Skills.svelte";
</script>

<div class="sheet-container">
  <Skills />
</div>

<style lang="scss">
  .sheet-container {
    background-image: url("@/assets/Backdrop.webp");
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
