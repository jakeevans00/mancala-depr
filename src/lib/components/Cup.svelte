<script>
  import Balls from "$lib/components/Balls.svelte";
  import { afterUpdate } from "svelte";

  export let count = 4;
  export let isCollector = false;
  export let team;
  export let id;
  export let onClick;
  export let updateTrigger;

  let showTooltip = false;
  let hideTooltipTimeout;

  const cupStyles =
    "bg-white flex items-center justify-center rounded-full w-[50px] md:w-[75px] lg:w-[100px] hover:bg-yellow-400 transition-width transition-slowest ease";
  const collectorStyles = `bg-black w-full h-[200px] md:h-[300px] lg:h-[370px] ${team === "top" ? "rounded-tl-full rounded-bl-full" : " rounded-tr-full rounded-br-full"} flex items-center justify-center hover:bg-teal-400 transition-height transition-slowest ease`;

  function show() {
    clearTimeout(hideTooltipTimeout);
    showTooltip = true;
  }

  function hide() {
    hideTooltipTimeout = setTimeout(() => {
      showTooltip = false;
    }, 100);
  }

  $: ballsKey = `${id}-${count}-${updateTrigger}`;
</script>

<div
  class={isCollector ? collectorStyles : cupStyles}
  on:mouseover={show}
  on:mouseleave={hide}
  on:focus={show}
  on:blur={hide}
  on:click={() => onClick(id)}
  on:keydown={() => onClick(id)}
  role="button"
  tabindex="0"
>
  {#if showTooltip}
    <div class="text-black">
      {count}
    </div>
  {:else}
    <Balls {count} key={ballsKey} />
  {/if}
</div>
