import { craeft } from "@craeft/engine/dist/craeft";
import { Item } from "@craeft/engine/dist/items";
import React from "react";
import ItemDetails from "./ItemDetails";

interface ItemDescriptionProps {
  item: Item;
  onUnequip?: (item: Item) => void;
  onEquip?: (item: Item) => void;
  onDisentchant?: (item: Item) => void;
}
export default function ItemDescription({
  item,
  onUnequip,
  onEquip,
  onDisentchant,
}: ItemDescriptionProps) {
  return (
    <div>
      <ItemDetails item={item} />

      {item.equipped ? (
        <button
          className={`rpgui-button ${craeft.player.isFarming ? "rpgui-disabled" : ""}`}
          onClick={() => onUnequip?.(item)}
          type="button"
        >
          <span>Unequip</span>
        </button>
      ) : (
        <button
          className={`rpgui-button ${craeft.player.isFarming ? "rpgui-disabled" : ""}`}
          onClick={() => onEquip?.(item)}
          type="button"
        >
          <span>Equip</span>
        </button>
      )}

      {!item.equipped ? (
        <div className="">
          <button
            className="rpgui-button"
            onClick={() => onDisentchant?.(item)}
            type="button"
          >
            <span>Disentchant</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
