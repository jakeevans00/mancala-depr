<script>
  import Ball from './Ball.svelte';
  
  export let size = '15px'; 
  export let count = 4;


  let balls = Array(count).fill(null);
</script>


<div class="h-2/3 w-2/3">
  {#each balls as index}
    <div class="ball-wrapper" style="
        top: {Math.random() * 100}%; 
        left: {Math.random() * 100}%;">
      <Ball size="{size}" /> 
    </div>   
  {/each}
</div>