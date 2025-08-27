import { ItemNames } from "@craeft/engine/dist/data";
import { PreItem } from "@craeft/engine/dist/items";
import React from "react";
import ItemIcon from "./ItemIcon";
import PreItemStats from "./PreItemStats";

interface PreItemDescriptionProps {
  preItem: PreItem;
}

export default function PreItemDescription({
  preItem,
}: PreItemDescriptionProps) {
  return (
    <div className="rpgui-container framed-grey item columns">
      <ItemIcon item={preItem} />

      <div className={"column item-description"}>
        <div className={"row"}>
          Type: <span>{ItemNames[preItem.type]}</span>
        </div>

        <PreItemStats preItem={preItem} />
      </div>
    </div>
  );
}
