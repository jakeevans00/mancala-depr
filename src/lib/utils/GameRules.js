export const validateMove = (turn, cupId, cups) => {
  let cupIndex = cups.findIndex((cup) => cup.id === cupId);
  let ballCount = cups[cupIndex].count;

  if (ballCount === 0) return false;

  return (turn === "top" && cupId <= 6) || (turn === "bottom" && cupId >= 7);
};

export const isStealMove = (cupId, ballCount, cups) => {
  if (isDoubleMove(cupId, ballCount)) return false;
  const endingIndex = cups.findIndex(
    (cup) => cup.id === (cupId + ballCount) % 14
  );
  let finalCupCount = cups[endingIndex].count;
  return finalCupCount === 0 || finalCupCount === 1;
};

export const isDoubleMove = (cupId, ballCount) => {
  return (cupId + ballCount) % 14 === 7 || (cupId + ballCount) % 14 === 0;
};

export const oppositeIndex = (cupId, cups) => {
  return 14 - cupId;
};

export const indexOf = (cupId, cups) => {
  return cups.findIndex((cup) => cup.id === cupId);
};
