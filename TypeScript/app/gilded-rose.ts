import { updateItems } from "./updateItems";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name.includes("Conjured")) item = updateItems(item, "conjured");
      else {
        switch (item.name) {
          case "Aged Brie":
            item = updateItems(item, "agedBrie");
            break;

          case "Backstage passes to a TAFKAL80ETC concert":
            item = updateItems(item, "backStagePasses");
            break;

          case "Sulfuras, Hand of Ragnaros":
            item = updateItems(item, "sulfuras");
            break;

          default:
            item = updateItems(item, "other");
        }
      }
    });

    return this.items;
  }
}
