<script>
  import Balls from "$lib/components/Balls.svelte";

  export let count = 2;
  export let isCollector = false;
  export let team;

  let showTooltip = false;
  let hideTooltipTimeout;

  const cupStyles = "bg-white flex items-center justify-center rounded-full w-[50px] md:w-[90px] hover:bg-yellow-100";
  const collectorStyles = `bg-white w-full md:h-[300px] ${team === "top" ? 'rounded-tl-full rounded-bl-full' : ' rounded-tr-full rounded-br-full'} flex items-center justify-center`;

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

<div class={isCollector ? collectorStyles : cupStyles}
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
