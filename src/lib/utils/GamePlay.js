export const validateMove = (turn, cupId, cups) => {
  let cupIndex = cups.findIndex((cup) => cup.id === cupId);
  let ballCount = cups[cupIndex].count;

  if (ballCount === 0) return false;

  return (turn === "top" && cupId <= 6) || (turn === "bottom" && cupId >= 7);
};
