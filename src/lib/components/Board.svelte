<script>
  import Collector from "$lib/components/Collector.svelte";
  import Cup from "$lib/components/Cup.svelte";
</script>

<div class="grid-container">
  <div class="collector-left collector"></div>
  <div class="cups-top flex gap-1 justify-around">
    <Cup />
    <Cup />
    <Cup />
    <Cup />
    <Cup />
    <Cup />
  </div>
  <div class="cups-bottom flex gap-1 justify-around">
    <Cup />
    <Cup />
    <Cup />
    <Cup />
    <Cup />
    <Cup />
  </div>
  <div class="collector-right collector"></div>
</div>

<div></div>

<style>
  .collector {
    border-radius: 50px;
    width: 50px;
  }
  .collector-left {
    grid-area: collector-left;
    background-color: white;
  }
  .collector-right {
    grid-area: collector-right;
    background-color: white;
  }
  .cups-top {
    grid-area: cups-top;
  }
  .cups-bottom {
    grid-area: cups-bottom;
  }

  .grid-container {
    border-radius: 20px;
    margin: auto;
    display: grid;
    grid-template-areas:
      "collector-left cups-top collector-right"
      "collector-left cups-bottom collector-right";
    gap: 10px;
    background-color: brown;
    padding: 10px;
    width: 470px;
  }
</style>
