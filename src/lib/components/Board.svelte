<script>
  import Collector from "$lib/components/Collector.svelte";
  import Cup from "$lib/components/Cup.svelte";
</script>

<div class="grid grid-cols-[1fr_6fr_1fr] bg-[rgb(181,122,83)] p-5 h-full rounded-xl max-w-[1000px]">
  <Collector />
    <div class="grid grid-cols-6 grid-rows-2 gap-4 p-4">
      <Cup>Cup 1</Cup>
      <Cup>Cup 2</Cup>
      <Cup>Cup 3</Cup>
      <Cup>Cup 4</Cup>
      <Cup>Cup 5</Cup>
      <Cup>Cup 6</Cup>

      <Cup>Cup 7</Cup>
      <Cup>Cup 8</Cup>
      <Cup>Cup 9</Cup>
      <Cup>Cup 10</Cup>
      <Cup>Cup 11</Cup>
      <Cup>Cup 12</Cup>
  </div>
  
  <Collector />
</div>


