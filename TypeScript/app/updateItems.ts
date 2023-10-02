import { ITEMS_QUALITIES } from "./ITEMS_QUALITIES";
import { Item } from "./gilded-rose";
import { getSellInStatus, getSellInStatusForConcert } from "./sellIn";

export const updateItems = (
  item: Item,
  category: "agedBrie" | "backStagePasses" | "sulfuras" | "conjured" | "other"
) => {
  item.sellIn -= 1;
  const mxQuality = Math.min(item.quality, ITEMS_QUALITIES[category].max);

  const sellInStatus =
    category === "backStagePasses"
      ? getSellInStatusForConcert(item.sellIn)
      : getSellInStatus(item.sellIn);

  const quality = mxQuality + ITEMS_QUALITIES[category].default * sellInStatus;
  item.quality = Math.max(quality, ITEMS_QUALITIES[category].min);

  return item;
};

// export const update

// export const updateOtherItems = (item: Item) => {
//   item.sellIn -= 1;

//   const mxQuality = Math.min(item.quality, ITEMS_QUALITIES.other.max);
//   const quality =
//     mxQuality + ITEMS_QUALITIES.other.default * getSellInStatus(item.sellIn);

//   item.quality = Math.max(quality, ITEMS_QUALITIES.other.min);

//   return item;
// };

// export const updateSulfurasItems = (item: Item) => {
//   item.sellIn -= 1;
//   const mxQuality = Math.min(item.quality, ITEMS_QUALITIES.sulfuras.max);
//   const quality = mxQuality + ITEMS_QUALITIES.sulfuras.default * getSellInStatus(item.sellIn);

//   item.quality = Math.max(quality, ITEMS_QUALITIES.sulfuras.min);

//   return item;
// };

// export const updateAgedBrieItems = (item: Item) => {
//   item.sellIn -= 1;

//   const mxQuality = Math.min(item.quality, ITEMS_QUALITIES.agedBrie.max);
//   const quality =
//     mxQuality + ITEMS_QUALITIES.agedBrie.default * getSellInStatus(item.sellIn);

//   item.quality = Math.max(quality, ITEMS_QUALITIES.agedBrie.min);

//   return item;
// };

// export const updateConjuredItems = (item: Item) => {
//   item.sellIn -= 1;
//   const mxQuality = Math.max(item.quality, ITEMS_QUALITIES.conjured.max);
//   const quality = mxQuality + ITEMS_QUALITIES.conjured.default * getSellInStatus(item.sellIn);

//   item.quality = Math.max(quality, ITEMS_QUALITIES.conjured.min);

//   return item;
// }
