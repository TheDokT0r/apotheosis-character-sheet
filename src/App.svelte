<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Sheet from "./Pages/ChracterSheet/Sheet.svelte";
  import Login from "./Pages/Login.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/" component={Sheet} />
  <Route path="/login" component={Login} />
</Router>
