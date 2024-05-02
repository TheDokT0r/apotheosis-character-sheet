<script lang="ts">
  import "./global.scss";
  import Sheet from "./Pages/ChracterSheet/Sheet.svelte";
  import { initializeApp } from "firebase/app";
  import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import Login from "./Pages/Login.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { Router, Link, Route } from "svelte-routing";

  export let url: string = "";

  const firebaseConfig = {
    apiKey: "AIzaSyB0gfMN5oo2gVqN1r7E0nVYsLp8STd1XZ8",

    authDomain: "ttrpg-12502.firebaseapp.com",

    projectId: "ttrpg-12502",

    storageBucket: "ttrpg-12502.appspot.com",

    messagingSenderId: "799549263340",

    appId: "1:799549263340:web:21814a36be251e487a44c9",
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  let loggedIn = false;

  auth.onAuthStateChanged((user) => {
    if (user) loggedIn = true;
  });
</script>

<!-- <Router {url}>
  <svelte:fragment>
    <Route path="/"><Sheet /></Route>
    <Route path="login" component={Login} />
  </svelte:fragment>
</Router> -->

{#if loggedIn}
  <Sheet />
{:else}
  <Login />
{/if}

<SvelteToast />
