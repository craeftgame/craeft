import { Item } from "@craeft/engine/dist/items";
import { Rarities, RarityNames } from "@craeft/engine/dist/data";
import React from "react";

interface ItemNameProps {
  readonly item: Item;
}

export default function ItemName({ item }: ItemNameProps) {
  return (
    <span
      className={
        item.rarity !== Rarities.Common
          ? RarityNames[item.rarity]?.toLowerCase()
          : ""
      }
    >
      {item.isBroken ? <span className="red">Broken </span> : null}

      {item.getName?.() ?? null}
    </span>
  );
}
