<script>
  import Ball from "./Ball.svelte";
  export let count;
  export const key = undefined;
  export let size = "17px";

  $: balls = Array(count).fill(0);

  const baseSpacing = 15; // Initial distance between the first few balls
  const angleIncrement = Math.PI / 3; // Angle step (45 degrees)

  function getPosition(index) {
    const shrinkingFactor = 1 / (index * 0.35 + 1);
    const radius = baseSpacing * shrinkingFactor * index;
    const angle = index * angleIncrement;

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  }
</script>

<div class="relative w-full h-full">
  {#each balls as _, i (i)}
    <div
      class="absolute"
      style={`top: 41%; left: 41%; transform: translate(${getPosition(i).x}px, ${getPosition(i).y}px)`}
    >
      <Ball {size} />
    </div>
  {/each}
</div>
