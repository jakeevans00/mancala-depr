<script>
  import Ball from "./Ball.svelte";
  export let count;
  export const key = undefined;
  export let size = "15px";

  $: balls = Array(count).fill(0);
</script>

<div class="relative w-full h-full">
  {#each balls as _, i (i)}
    <div class="">
      <Ball {size} />
    </div>
  {/each}
</div>
