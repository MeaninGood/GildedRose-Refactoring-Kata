export const getSellInStatus = (sellIn: number) => {
  return sellIn <= 0 ? 2 : 1;
};

export const getSellInStatusForConcert = (sellIn: number) => {
  if (sellIn <= 0) {
    return 0;
  } else if (sellIn <= 5) {
    return 3;
  } else if (sellIn <= 10) {
    return 2;
  } else return 1;
};
