<script>
  export let colors = ['blue', 'green', 'red', 'purple', 'orange']
  
  export let size = '50px'; 

  const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
</script>

<style>
  .ball {
    border-radius: 50%;
    border: solid 1px white;
    display: inline-block;
    background-color: var(--color);
    width: var(--size);
    height: var(--size);
  }
</style>

<div
  class="ball"
  style="
    --color: {getRandomColor()};
    --size: {size};
  "
></div>
