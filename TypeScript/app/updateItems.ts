import { ITEMS_QUALITIES } from "./ITEMS_QUALITIES";
import { Item } from "./gilded-rose";
import { getSellInStatus, getSellInStatusForConcert } from "./sellIn";

export const updateItems = (
  item: Item,
  category: "agedBrie" | "backStagePasses" | "sulfuras" | "conjured" | "other"
) => {
  item.sellIn -= 1;

  const sellInStatus =
    category === "backStagePasses"
      ? getSellInStatusForConcert(item.sellIn)
      : getSellInStatus(item.sellIn);

  const mxQuality =
    item.quality + ITEMS_QUALITIES[category].default * sellInStatus;

  const quality = Math.max(mxQuality, ITEMS_QUALITIES[category].min);
  item.quality = Math.min(quality, ITEMS_QUALITIES[category].max);

  return item;
};
