<script lang="ts">
  import BasicInfo from "./BasicInfo.svelte";
  import Skills from "./Skills.svelte";
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";

  let tabSet: number = 0;
</script>

<div class="sheet-container">
  <TabGroup justify="justify-center">
    <Tab bind:group={tabSet} name="tab1" value={0}>Basic Info</Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}>Skills</Tab>
    <Tab bind:group={tabSet} name="tab3" value={2}>Placeholder</Tab>
    <!-- Tab Panels --->
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        <BasicInfo />
      {:else if tabSet === 1}
        <Skills />
      {:else if tabSet === 2}
        LOL
      {/if}
    </svelte:fragment>
  </TabGroup>
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
