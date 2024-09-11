<script>
  import Cup from "$lib/components/Cup.svelte";
  import {
    validateMove,
    isDoubleMove,
    isStealMove,
    oppositeIndex,
    indexOf,
  } from "$lib/utils/GameRules.js";

  export let turn = "top";

  let topCollector = { id: 7, count: 0, team: "top" };
  let bottomCollector = { id: 0, count: 0, team: "bottom" };

  let cups = [
    { id: 6, count: 4, team: "top" },
    { id: 5, count: 4, team: "top" },
    { id: 4, count: 4, team: "top" },
    { id: 3, count: 4, team: "top" },
    { id: 2, count: 4, team: "top" },
    { id: 1, count: 4, team: "top" },
    { id: 8, count: 4, team: "bottom" },
    { id: 9, count: 4, team: "bottom" },
    { id: 10, count: 4, team: "bottom" },
    { id: 11, count: 4, team: "bottom" },
    { id: 12, count: 4, team: "bottom" },
    { id: 13, count: 4, team: "bottom" },
  ];

  let updateTrigger = 0;

  function updateTurn() {
    turn = turn === "top" ? "bottom" : "top";
  }

  async function updateBoard(cupId) {
    if (!validateMove(turn, cupId, cups)) return;

    let cupIndex = indexOf(cupId, cups);
    let ballCount = cups[cupIndex].count;
    cups[cupIndex].count = 0;

    for (let i = 1; i <= ballCount; i++) {
      let tmpIndex = cups.findIndex((cup) => cup.id === (cupId + i) % 14);
      if (tmpIndex !== -1) {
        cups[tmpIndex].count += 1;
      }

      if ((cupId + i) % 14 === 7) topCollector.count += 1;
      if ((cupId + i) % 14 === 0) bottomCollector.count += 1;
    }

    let endingIndex = (cupId + ballCount) % 14;
    if (isStealMove(cupId, ballCount, cups)) {
      if (turn === "top") {
        topCollector.count +=
          cups[indexOf(oppositeIndex(endingIndex), cups)].count + 1;
      } else {
        bottomCollector.count +=
          cups[indexOf(oppositeIndex(endingIndex), cups)].count + 1;
      }
      cups[indexOf(oppositeIndex(endingIndex), cups)].count = 0;
      cups[indexOf(endingIndex, cups)].count = 0;
    }

    updateTrigger += 1;
    cups = [...cups];
    topCollector = { ...topCollector };
    bottomCollector = { ...bottomCollector };

    if (isDoubleMove(cupId, ballCount)) return;
    updateTurn();
  }
</script>

<div class="grid grid-cols-[1fr_6fr_1fr] bg-[rgb(186,86,36)] p-6 rounded-xl">
  <Cup
    bind:count={topCollector.count}
    team={topCollector.team}
    id={topCollector.id}
    isCollector={true}
    {updateTrigger}
    onClick={updateBoard}
  />
  <div class="grid grid-cols-6 grid-rows-2 gap-4 px-4">
    {#each cups as cup (cup.id)}
      <Cup
        bind:count={cup.count}
        id={cup.id}
        team={cup.team}
        onClick={updateBoard}
        {updateTrigger}
      />
    {/each}
  </div>
  <Cup
    team={bottomCollector.team}
    id={bottomCollector.id}
    count={bottomCollector.count}
    isCollector={true}
    {updateTrigger}
    onClick={updateBoard}
  />
</div>
