
<script>
   export let team;
   let total = 0;
</script>


<div class={`bg-white w-full md:h-[300px] ${team === "top" ? 'rounded-tl-full rounded-bl-full' : ' rounded-tr-full rounded-br-full'} flex items-center justify-center`}>
  <p class="text-black">{total}</p>
</div>