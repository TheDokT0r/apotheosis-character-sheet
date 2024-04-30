<script lang="ts">
  import BasicInfo from "./BasicInfo.svelte";
  import Skills from "./Skills.svelte";
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";

  let tabSet: number = 0;
</script>

<div class="sheet-container">
  <h1 class="title">Apotheosis Character Sheet</h1>

  <TabGroup justify="justify-center">
    <Tab bind:group={tabSet} name="tab1" value={0}><h2>Basic Info</h2></Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}><h2>Skills</h2></Tab>
    <Tab bind:group={tabSet} name="tab3" value={2}><h2>Placeholder</h2></Tab>
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
    text-align: justify;
    display: inline-block;
    width: 100%;
    font-size: 100%;

    .title {
      font-family: Creepshow-Grunge;
      width: 100%;
      font-size: 5vw;
      position: relative;
      margin-top: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      opacity: 90%;
      flex-wrap: wrap;
      white-space: initial;
    }

    h2 {
      font-family: Brush-King;
      opacity: 90%;
      font-size: 0.9rem;
    }
  }
</style>
