import { Rarities, RarityNames } from "@craeft/engine/dist/data";
import { Item } from "@craeft/engine/dist/items";
import React from "react";
import ItemStats from "../item/ItemStats";
import Attribute from "../utility/Attribute";

interface ItemDetailsProps {
  readonly item: Item;
}

export default function ItemDetails({ item }: ItemDetailsProps) {
  return (
    <>
      <div>
        <span
          className={
            item.rarity && item.rarity !== Rarities.Common
              ? RarityNames[item.rarity]?.toLowerCase()
              : ""
          }
        >
          {item.getName?.() ?? null}
        </span>
      </div>

      <Attribute label="Level" value={item.level} />

      <ItemStats item={item} />
    </>
  );
}
