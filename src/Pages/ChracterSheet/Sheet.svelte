<script lang="ts">
  import Stats from "../Stats.svelte";
  import BasicInfo from "./BasicInfo.svelte";
  import Skills from "./Skills.svelte";
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import About from "../About.svelte";
  import Status from "../Status.svelte";
  import type { FirebaseApp } from "firebase/app";
  import { getAuth, type Auth } from "firebase/auth";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { doc, getDoc, getFirestore } from "firebase/firestore";
  import initUserDoc from "@/Helper/initUserDoc";
  import firebaseApp from "@/Helper/firebaseManager";

  onMount(async () => {
    const user = getAuth().currentUser;
    if (!user) {
      navigate("/login");
      return;
    }

    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "sheets", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) await initUserDoc();
  });

  let tabSet: number = 0;
</script>

<div class="sheet-container">
  <div class="title-container">
    <h1 class="title">Apotheosis Character Sheet</h1>
    <p>Build 1.0.0 - House</p>
  </div>

  <TabGroup justify="justify-center">
    <Tab bind:group={tabSet} name="tab1" value={0}><h2>Basic Info</h2></Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}><h2>Stats</h2></Tab>
    <Tab bind:group={tabSet} name="tab3" value={2}><h2>Skills</h2></Tab>
    <Tab bind:group={tabSet} name="tab3" value={3}><h2>Status</h2></Tab>
    <Tab bind:group={tabSet} name="tab4" value={4}><h2>About</h2></Tab>
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        <BasicInfo />
      {:else if tabSet === 1}
        <Stats />
      {:else if tabSet === 2}
        <Skills />
      {:else if tabSet === 3}
        <Status />
      {:else if tabSet === 4}
        <About />
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

    .title-container {
      display: flex;
      flex-direction: row;
      direction: ltr;

      p {
        width: 5%;
      }

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
    }

    h2 {
      font-family: Brush-King;
      opacity: 90%;
      font-size: 0.9rem;
    }
  }
</style>
