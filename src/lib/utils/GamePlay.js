export const validateMove = (turn, cupId, cups) => {
  let cupIndex = cups.findIndex((cup) => cup.id === cupId);
  let ballCount = cups[cupIndex].count;

  if (ballCount === 0) return false;

  return (turn === "top" && cupId <= 6) || (turn === "bottom" && cupId >= 7);
};

export const isStealMove = () => {};

export const isDoubleMove = (cupId, ballCount) => {
  return (cupId + ballCount) % 14 === 7 || (cupId + ballCount) % 14 === 0;
};
