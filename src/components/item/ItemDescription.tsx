import { Item } from "@craeft/engine/dist/items";
import React, { use } from "react";
import ItemDetails from "./ItemDetails";
import { CraeftContext } from "../../provider/CraeftProvider";

interface ItemDescriptionProps {
  readonly item: Item;
  readonly onUnequip?: (item: Item) => void;
  readonly onEquip?: (item: Item) => void;
  readonly onDisentchant?: (item: Item) => void;
}
export default function ItemDescription({
  item,
  onUnequip,
  onEquip,
  onDisentchant,
}: ItemDescriptionProps) {
  const { craeft } = use(CraeftContext);

  return (
    <div>
      <ItemDetails item={item} />

      {item.isEquipped ? (
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

      {!item.isEquipped ? (
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
