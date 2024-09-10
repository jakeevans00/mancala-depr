<script>
  import Ball from './Ball.svelte';
  
  export let size = '15px'; 
  export let count = 4;

  let balls = Array(count).fill(null);
</script>


<div class="">
  {#each balls as index}
    <div class="" style="
        top: {Math.random() * 100  }%; 
        left: {Math.random() * 100 }%;">
      <Ball size="{size}" /> 
    </div>   
  {/each}
</div>