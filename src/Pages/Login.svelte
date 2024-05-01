<script lang="ts">
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    updateProfile,
    sendPasswordResetEmail,
  } from "firebase/auth";

  import { toast } from "@zerodevx/svelte-toast";

  let state: "login" | "signup" = "login";

  let email: string;
  let password: string;
  let confirmPassword: string;
  let username: string;

  const auth = getAuth();

  const setState = (newState: "login" | "signup") => {
    email = "";
    password = "";
    username = "";
    confirmPassword = "";
    state = newState;
  };

  const signup = () => {
    if (!email || !username || !password || !confirmPassword) {
      toast.push("Please fill up all data!");
      return;
    }

    if (password !== password) {
      toast.push("Passwords don't match. Please try again!");
      return;
    }

    console.log({ auth });
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const { user } = userCredential;
        user.displayName;

        await updateProfile(auth.currentUser!, { displayName: username });
        toast.push(`Welcome, ${user.displayName}!`);
      })
      .catch((error) => {
        toast.push(error.message);
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        toast.push(`Welcome back, ${user.displayName}!`);
      })
      .catch((error) => {
        toast.push(error.message);
      });
  };

  const resetPassword = () => {
    toast.push("Coming soon!");
  };
</script>

<div class="form-container drop-shadow-2xl shadow-border">
  {#if state === "login"}
    <form>
      <h1>Login</h1>
      <input bind:value={email} type="text" placeholder="Email" />
      <input bind:value={password} type="password" placeholder="Password" />
      <button on:click|preventDefault={login}>Login!</button>

      <div class="bottom-text">
        <p>
          Don't have an account?
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span on:click={() => setState("signup")}>Create one!</span>
        </p>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p>
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          Forgot your password? <span on:click={resetPassword}>reset it!</span>
        </p>
      </div>
    </form>
  {:else}
    <form>
      <h1>Signup</h1>
      <input bind:value={email} type="email" placeholder="Email" />
      <input bind:value={username} type="text" placeholder="Username" />
      <input bind:value={password} type="password" placeholder="Password" />
      <input
        bind:value={confirmPassword}
        type="password"
        placeholder="Confirm Password"
      />
      <button on:click|preventDefault={signup}>Create Account!</button>

      <div class="bottom-text">
        <p>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          Already have an account?
          <span on:click={() => setState("login")}>Login!</span>
        </p>
      </div>
    </form>
  {/if}
</div>

<style lang="scss">
  .form-container {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  form {
    position: relative;
    height: 70%;
    width: 60%;
    border: 2px solid black;
    background-color: white;
    border-radius: 5%;
    display: grid;
    place-items: center;
    white-space: pre-wrap;

    @media screen and (max-width: 450px) {
      width: 90%;
    }
  }

  .bottom-text {
    bottom: 0;

    p {
      display: flex;

      span {
        text-decoration: underline;
        cursor: pointer;
        user-select: none;
        margin-left: 1ch;
      }
    }
  }

  input {
    text-align: center;
    border: 2px solid black;
    border-radius: 5%;
    font-size: 1.5em;
    margin-top: -5rem;
    max-width: 100%;
  }

  button {
    border: 2px solid black;
    font-size: 1.5rem;
    text-wrap: nowrap;
    border-radius: 10%;
    padding: 10px;
    margin-top: -5rem;

    &:active {
      background-color: black;
      color: white;
    }

    &:hover {
      filter: brightness(0.5);
    }
  }

  h1 {
    font-family: Creepshow;
    font-size: 4rem;
  }
</style>
