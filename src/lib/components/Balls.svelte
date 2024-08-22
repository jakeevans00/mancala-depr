<script>
  import Ball from './Ball.svelte';
  
  export let size = '15px'; 
  export let count = 4;


  let balls = Array(count).fill(null);
</script>

<style>
  .balls-container {
    position: relative;
    width: 30px; 
    height: 30px; 
  }

  .ball-wrapper {
    position: absolute;
    width: 20px; 
    height: 20px; 
  }
</style>

<div class="balls-container">
  {#each balls as index}
    <div class="ball-wrapper" style="
        top: {Math.random() * 100}%; 
        left: {Math.random() * 100}%;">
      <Ball size="{size}" /> 
    </div>   
  {/each}
</div>