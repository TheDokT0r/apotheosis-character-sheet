<script lang="ts">
  import TextField from "@/Components/TextField.svelte";
  import TextFieldWithTitle from "@/Components/TextFieldWithTitle.svelte";

  interface TextWithTitleData {
    title: string;
    placeholder: string;
  }

  const majorStats: TextWithTitleData[] = [
    { title: "Name", placeholder: "Your Name Here" },
    { title: "Affiliation", placeholder: "Are you a damn commie?" },
    { title: "Archetype", placeholder: "Are you buff?" },
  ];

  const minorStats: TextWithTitleData[] = [
    { title: "Player", placeholder: "Who the hell are you???" },
    { title: "Species", placeholder: "It feels kinda racist" },
  ];
</script>

<div>
  <div class="basic-info-container">
    {#each majorStats as { title, placeholder }}
      <div class="input-container">
        <TextFieldWithTitle bind:title bind:placeholder />
      </div>
    {/each}
  </div>

  <div class="basic-info-container minor-stats">
    {#each minorStats as { title, placeholder }}
      <div class="input-container">
        <TextFieldWithTitle bind:title bind:placeholder />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .basic-info-container {
    display: flex;
    flex-direction: columns;
    justify-content: center;

    .input-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 40px;
    }
  }

  .minor-stats {
    transform: scale(0.8);
  }
</style>
