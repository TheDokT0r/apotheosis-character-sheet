<script lang="ts">
  import TextFieldWithTitle from "@/Components/TextFieldWithTitle.svelte";
  import { getAuth } from "firebase/auth";
  import { onMount } from "svelte";

  interface TextWithTitleData {
    [title: string]: {
      placeholder: string;
      state: "major" | "minor";
      value: string;
    };
  }

  let formattedData: TextWithTitleData = {
    Name: { placeholder: "Your Name Here", state: "major", value: "" },
    Affiliation: { placeholder: "Damn commie...", state: "major", value: "" },
    Archetype: { placeholder: "Are you buff?", state: "major", value: "" },
    Player: { placeholder: "Who the hell are you?", state: "minor", value: "" },
    Species: {
      placeholder: "It feels kinda racist",
      state: "minor",
      value: "",
    },
  };

  const setData = (key: string, value: string) => {
    formattedData = formattedData;
  };

  const getUserData = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;
    formattedData.Player.value = user.displayName ?? "";
  };

  onMount(() => {
    getUserData();
  });
</script>

<div class="basic-info-container">
  <div class="data-container">
    {#each Object.entries(formattedData) as [title, { state, placeholder, value }]}
      <div
        class="input-container"
        style="transform: scale({state === 'major' ? 1 : 0.8});"
      >
        <TextFieldWithTitle bind:value {title} {placeholder} />
      </div>
    {/each}
  </div>
</div>

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
