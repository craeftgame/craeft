import { SlotNames } from "@craeft/engine/dist/data";
import { Item } from "@craeft/engine/dist/game";
import React from "react";
import ItemStats from "../item/ItemStats";
import Attribute from "../utility/Attribute";
import ItemName from "./ItemName";

interface ItemDetailsProps {
  readonly item: Item;
  readonly compareItem?: Item;
}

export default function ItemDetails({ item, compareItem }: ItemDetailsProps) {
  return (
    <>
      <div>
        <ItemName item={item} />

        {compareItem ? (
          <>
            &nbsp;(
            <ItemName item={compareItem} />)
          </>
        ) : null}
      </div>

      <Attribute label="Level" value={item.level} />

      {item.slot ? (
        <div>
          <Attribute label="worn on" value={SlotNames[item.slot]!} />
        </div>
      ) : null}

      <ItemStats item={item} compareItem={compareItem} />
    </>
  );
}
