<script lang="ts">
  export let size: string = "10rem";
  const min = -5;
  const max = 5;
  let dodge: number;
  let defense: number;

  const onBlurEvent = () => {
    if (dodge > max) dodge = max;
    if (dodge < min) dodge = min;
    if (defense > max) defense = max;
    if (defense < min) defense = min;
  };
</script>

<div class="circle"></div>

<div class="skills-container">
  <div class="border-wrap" style="width: {size}; height: {size};">
    <h2 class="skill dodge">Dodge</h2>
    <div class="inputs-container">
      <input type="number" bind:value={dodge} on:blur={onBlurEvent} />
      <p class="splitter">/</p>
      <input type="number" bind:value={defense} on:blur={onBlurEvent} />
    </div>
    <h2 class="skill defense">Defense</h2>
  </div>
</div>

<style lang="scss">
  .skills-container {
    rotate: -60deg;
    display: flex;
    flex-direction: row;
    align-items: center;

    .border-wrap {
      padding: 1rem;
      position: relative;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
      background: linear-gradient(
        0.25turn,
        #a7793e,
        #e1c289,
        #a7793e,
        #e1c289,
        #a7793e
      );
      padding: 5px;
      border-radius: 50%;
    }

    input {
      position: relative;
      z-index: 2;
      text-align: center;
      width: 120%; /* Change width to 100% */
      height: 50%; /* Change height to 100% */
      background-color: transparent;
      outline: none;
      font-family: Brush-King;
      color: black;
      font-size: 1.8em;

      &[type="number"] {
        appearance: textfield;
      }
    }

    .splitter {
      position: relative;
      font-family: Brush-King;
      font-size: 5em;
      color: #544027;
      transform: translate(10%, -20%) rotate(70deg);
      user-select: none;
    }

    .skill {
      font-family: Brush-King;
      opacity: 50%;
      position: absolute;
      user-select: none;
      text-align: center;
      left: 25%;
      align-items: center;
      align-self: center;
    }

    .dodge {
      bottom: 105%;
    }

    .defense {
      bottom: -20%;
    }
    .inputs-container {
      width: 100%;
      height: 100%;
      background: #dcceb9;
      color: white;
      padding: 2rem;
      border-radius: 50%;
    }
  }
</style>
