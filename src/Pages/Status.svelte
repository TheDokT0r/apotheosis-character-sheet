<script lang="ts">
  import SplitSquareInput from "@/Components/SplitSquareInput.svelte";
  import heart from "@/assets/heart.webp";
  import brokenHeart from "@/assets/broken_heart.webp";
  import Wounds from "./ChracterSheet/Wounds.svelte";
  import {
    getCharacterSheet,
    updateCharacterSheet,
  } from "@/Helper/dataManager";

  const getStatus = async () => {
    const sheet = await getCharacterSheet();
    return sheet!.status;
  };

  const updateStatus = async (
    data: CharacterSheet["status"],
    newValue: number,
    type: "hp" | "strain" | "xp" | "wounds",
    which: "total" | "current"
  ) => {
    if (type === "wounds") return;
    const newData = structuredClone(data);
    newData[type][which] = newValue;
    await updateCharacterSheet(newData, "status");
  };
</script>

{#await getStatus() then status}
  <div class="status-container">
    <div>
      <img src={heart} alt="heat_img" />
      <SplitSquareInput
        totalValue={status.hp.total}
        currentValue={status.hp.current}
        onBlur1={async (e) => {
          const value = Number(e.currentTarget.value);
          await updateStatus(status, value, "hp", "current");
        }}
        onBlur2={async (e) => {
          const value = Number(e.currentTarget.value);
          await updateStatus(status, value, "hp", "total");
        }}
      />
    </div>
    <div>
      <img src={brokenHeart} alt="heat_img" />
      <SplitSquareInput
        totalValue={status.strain.total}
        currentValue={status.strain.current}
        onBlur1={async (e) => {
          const value = Number(e.currentTarget.value);
          await updateStatus(status, value, "strain", "current");
        }}
        onBlur2={async (e) => {
          const value = Number(e.currentTarget.value);
          await updateStatus(status, value, "strain", "total");
        }}
      />
    </div>
    <div>
      <h2>XP</h2>
      <SplitSquareInput
        totalValue={status.xp.total}
        currentValue={status.xp.current}
        onBlur1={async (e) => {
          const value = Number(e.currentTarget.value);
          await updateStatus(status, value, "xp", "current");
        }}
        onBlur2={async (e) => {
          const value = Number(e.currentTarget.value);
          await updateStatus(status, value, "xp", "total");
        }}
      />
    </div>

    <!-- <Wounds /> -->
  </div>
{/await}

<style lang="scss">
  .status-container {
    display: grid;
    place-items: center;

    h2 {
      position: relative;
      font-family: Creepshow;
      font-size: 3em;
      user-select: none;
    }

    img {
      transform: translate(-5%, 50%) rotate(-10deg);
      width: 4em;
      bottom: 0;
    }
  }
</style>
