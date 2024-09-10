<script>
  import Balls from "$lib/components/Balls.svelte";
  let showTooltip = false;
  export let count = 2;
  let player;

  let hideTooltipTimeout;

  function show() {
    clearTimeout(hideTooltipTimeout);
    showTooltip = true;
  }

  function hide() {
    hideTooltipTimeout = setTimeout(() => {
      showTooltip = false;
    }, 100); // Adjust this delay to your preference
  }
</script>

<div class="bg-white flex items-center justify-center rounded-full w-[50px] md:w-[90px] hover:bg-yellow-100"
  on:mouseenter={show} 
  on:mouseleave={hide}
  on:focus={show} 
  on:blur={hide}
  role="button"
  tabindex="0"
>
  {#if showTooltip}
    <div class="text-black">
      {count}
    </div>
  {:else}
    <Balls count={count} />
  {/if}
</div>
