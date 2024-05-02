<script lang="ts">
  import SplitInputField from "@/Components/SplitInputField.svelte";
  import GearInput from "@/Components/GearInput.svelte";
  import {
    getCharacterSheet,
    updateCharacterSheet,
  } from "@/Helper/dataManager";
  import { allAttributes } from "@/Helper/attributesAssist";
  import type { AttributeHeader } from "@/Helper/attributesAssist";
  import { onMount } from "svelte";

  // const proficiencyStats = ["PSY", "INT", "INL"];
  // const rankStats = ["AGL", "PHY"];

  const gears: Partial<
    Record<AttributeHeader, { title: string; gear: 1 | 2 }>
  > = {
    psyche: {
      title: "PSY",
      gear: 1,
    },

    intuition: {
      title: "INT",
      gear: 1,
    },

    intellect: {
      title: "INL",
      gear: 1,
    },

    agility: {
      title: "AGL",
      gear: 2,
    },
    physique: {
      title: "PHY",
      gear: 2,
    },
    speed: {
      title: "SPEED",
      gear: 1,
    },
  };

  export let attributes: CharacterSheet["attributes"];

  (async () => {
    const sheet = await getCharacterSheet();
    attributes = sheet!.attributes;
  })();
</script>

{#if attributes}
  <div class="stats-container">
    <div class="data-container gear-container">
      {#each allAttributes as attribute}
        {#if attribute !== "dodge" && attribute !== "defense"}
          <div class="gear-container">
            <GearInput
              title={gears[attribute]?.title ?? ""}
              gear={gears[attribute]?.gear}
              bind:value={attributes[attribute]}
              onBlur={async (e) => {
                const value = Number(e.currentTarget.value);
                if (!value || Number.isNaN(value)) {
                  attributes[attribute] = value;
                } else {
                  attributes[attribute] = value;
                }

                attributes = attributes;
                await updateCharacterSheet(attributes, "attributes");
              }}
            />
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <div class="dodge-defense-input">
    <SplitInputField
      element1Title="Dodge"
      element2Title="Defense"
      element1Max={5}
      element1Min={-5}
      element2Max={5}
      element2Min={-5}
      rotation={-45}
    />
  </div>
{/if}

<style lang="scss">
  .stats-container {
    position: relative;

    @media screen and (max-width: 480px) {
      display: grid;
      place-items: center;
    }
  }

  .dodge-defense-input {
    position: absolute;
    top: 70%;
    left: 10%;

    @media screen and (max-width: 480px) {
      position: relative;
      display: flex;
    }
  }

  .data-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; // Wrap items onto multiple lines if necessary
    justify-content: center; // Center items horizontally
    align-items: center; // Center items vertically
    margin: 1rem;

    .gear-container {
      margin: 2rem;
    }
  }
</style>
