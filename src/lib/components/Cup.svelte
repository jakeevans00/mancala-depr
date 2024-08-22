<script>
  import Balls from "$lib/components/Balls.svelte";
</script>

<style>
  .cup {
    border-radius: 50%;
    background: white;
    height: 50px;
    width: 50px;
  }

  .cup:hover {
    background: #fef9c3;
  }
</style>

<div class="cup" >
  <Balls count={4} />
</div>