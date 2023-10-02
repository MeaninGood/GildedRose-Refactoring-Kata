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
