<script lang="ts">
  export let size: string = "10rem";
  export let element1Min: number | undefined = undefined;
  export let element1Max: number | undefined = undefined;
  export let element2Min: number | undefined = undefined;
  export let element2Max: number | undefined = undefined;
  export let rotation: number = -60;
  export let element1Title: string;
  export let element2Title: string;

  export let field1Value: number = NaN;
  export let field2Value: number = NaN;
  export let onBlur1: BlurEvent = undefined;
  export let onBlur2: BlurEvent = undefined;

  const onBlurEvent = () => {
    if (element1Max && field1Value > element1Max) field1Value = element1Max;
    if (element1Min && field1Value < element1Min) field1Value = element1Min;
    if (element2Max && field2Value > element2Max) field2Value = element2Max;
    if (element2Min && field2Value < element2Min) field2Value = element2Min;
  };
</script>

<div class="skills-container" style="rotate: {rotation}deg;">
  <h2 class="skill dodge">{element1Title}</h2>
  <div class="border-wrap" style="width: {size}; height: {size};">
    <div class="inputs-container shadow-2xl">
      <input on:blur={onBlur1} type="number" bind:value={field1Value} />
      <p class="splitter">/</p>
      <input on:blur={onBlur2} type="number" bind:value={field2Value} />
    </div>
  </div>
  <h2 class="skill defense">{element2Title}</h2>
</div>

<style lang="scss">
  .skills-container {
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
