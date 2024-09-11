<script>
  export let colors = ["#9cc5a1", "#49a078", "#216869", "#1f2421"];
  export let size;

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
</script>

<div
  class="ball"
  style="
    --color: {getRandomColor()};
    --size: {size};
  "
></div>

<style>
  .ball {
    border-radius: 50%;
    display: inline-block;
    background-color: var(--color);
    width: var(--size);
    height: var(--size);
  }
</style>
