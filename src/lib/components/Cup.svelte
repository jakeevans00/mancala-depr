<script>
  import Balls from "$lib/components/Balls.svelte";
  

  let showTooltip = false;
</script>

<style>
  .cup {
    border-radius: 50%;
    background: white;
    height: 50px;
    width: 50px;
  }

  .cup:hover {
    background: #fef9c3;
  }
  .tooltip-container {
    position: relative;
    display: inline-block;
    z-index: 200;
  }

  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
  }
</style>

<div class="tooltip-container"
     on:mouseenter={() => showTooltip = true}
     on:mouseleave={() => showTooltip = false}>
  <div class="cup" >
    <Balls count={4} />
  </div>
  {#if showTooltip}
    <div class="tooltip">
      count: {Balls.count}
    </div>
  {/if}
</div>
