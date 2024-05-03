<script lang="ts">
  import TextFieldWithTitle from "@/Components/TextFieldWithTitle.svelte";
  import {
    getCharacterSheet,
    updateCharacterSheet,
  } from "@/Helper/dataManager";
  import {
    allBasicInfoTypes,
    type BasicInfoHeader,
  } from "@/Helper/basicInfoAssist";

  let notes: string | undefined = "";

  getCharacterSheet().then((sheet) => {
    notes = sheet!.notes;
  });

  let formattedData: Record<
    BasicInfoHeader,
    { placeholder: string; state: "major" | "minor"; title: string }
  > = {
    character_name: {
      placeholder: "Your Name Here",
      state: "major",
      title: "Name",
    },
    affiliation: {
      placeholder: "Damn commie...",
      state: "major",
      title: "Affiliation",
    },
    archetype: {
      placeholder: "Are you buff?",
      state: "major",
      title: "Archetype",
    },
    player_name: {
      placeholder: "Who the hell are you?",
      state: "minor",
      title: "Player",
    },
    species: {
      placeholder: "It feels kinda racist",
      state: "minor",
      title: "Species",
    },
  };

  const getBasicInfo = async () => {
    const sheet = await getCharacterSheet();
    return sheet!.basic_info;
  };

  const updateData = async (
    data: CharacterSheet["basic_info"],
    key: BasicInfoHeader,
    newValue: string
  ) => {
    data[key] = newValue;
    data = data;
    await updateCharacterSheet(data, "basic_info");
  };
</script>

{#await getBasicInfo()}
  <p>Fetching data...</p>
{:then data}
  <div class="basic-info-container">
    <div class="data-container">
      {#each allBasicInfoTypes as key}
        <div
          class="input-container"
          style="transform: scale({formattedData[key].state === 'major'
            ? 1
            : 0.8});"
        >
          <TextFieldWithTitle
            title={formattedData[key].title}
            placeholder={formattedData[key].placeholder}
            value={data[key]}
            onBlur={async (e) => {
              await updateData(data, key, e.currentTarget.value);
            }}
          />
        </div>
      {/each}
    </div>

    <h1>Extra notes:</h1>
    <textarea
      placeholder="It looks like shit cause I've made it in like 4:00AM. Please don't be mad at me :("
      style="width: 20rem; height: 10rem;"
      bind:value={notes}
      on:blur={async () => {
        await updateCharacterSheet(notes, "notes");
      }}
    />
  </div>
{/await}

<style lang="scss">
  .basic-info-container {
    @media screen and (max-width: 480px) {
      position: relative;
      justify-content: center;
      display: grid;
      place-items: center;
      div {
        position: relative !important;
      }
    }

    display: flex;
    flex-direction: column;
    flex-wrap: wrap; // Wrap items onto multiple lines if necessary
    justify-content: center; // Center items horizontally
    align-items: center; // Center items vertically

    .data-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap; // Wrap items onto multiple lines if necessary
      justify-content: center; // Center items horizontally
      align-items: center; // Center items vertically
      margin: 1rem;
    }
  }

  .input-container {
    width: calc(
      33.33% - 20px
    ); // Three items per row with a small gap between them
    margin-bottom: 20px; // Adjust as needed

    @media screen and (max-width: 480px) {
      width: 100%; // One item per row on extra small screens
      justify-content: center; // Center items horizontally when there's only one item per row
      display: grid;
      place-items: center;
    }
  }
</style>
