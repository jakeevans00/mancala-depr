<script>
  import Cup from "$lib/components/Cup.svelte";

  let leftCollector;
  let rightCollector;
  let cups = [
    { id: 1, count: 1 },
    { id: 2, count: 2 },
    { id: 3, count: 3 },
    { id: 4, count: 4 },
    { id: 5, count: 5 },
    { id: 6, count: 0 },
    { id: 7, count: 4 },
    { id: 8, count: 3 },
    { id: 9, count: 4 },
    { id: 10, count: 2 },
    { id: 11, count: 3 },
    { id: 12, count: 0 }
  ];

export let turn = "top";

const changeTurn = () => {
  if (turn === "top") {
    turn = "bottom";
  } else {
    turn = "bottom";
  }
}

const makeMove = () => {
  console.log(turn);
  changeTurn();
};

function updateBoard(cupId) {
  cups = cups.map(cup =>
    cup.id === cupId ? { ...cup, count:cup.count + 1} : cup
  );
}

  

</script>

<div class="grid grid-cols-[1fr_6fr_1fr] bg-[rgb(181,122,83)] p-5 h-full rounded-xl max-w-[1000px]">
  <Cup team={"top"} id={0} count={0} isCollector={true}/>
    <div class="grid grid-cols-6 grid-rows-2 gap-4 px-4">
      {#each cups as { id, count }}
        <Cup id={id} count={count} onClick={updateBoard} />
      {/each}
    </div>
  <Cup team={"bottom"} id={13} count={0} isCollector={true}/>
</div>
