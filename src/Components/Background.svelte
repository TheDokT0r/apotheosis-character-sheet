<!-- TODO: Fix later lol -->

<div id="animatedBackground"></div>

<style lang="scss">
  $background: url("../assets/Backdrop.png");

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #animatedBackground {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: $background;
    background-repeat: repeat;
    background-position: 0 0;
    background-size: auto 100%;
    animation: animatedBackground 1500s linear infinite; // Animation speed
  }

  @keyframes animatedBackground {
    from {
      background-position: 0 0;
    }
    /*use negative width if you want it to flow right to left else and positive for left to right*/
    to {
      background-position: -10000px 0;
    }
  }
</style>
