import { ArmorSlots, WeaponSlots } from "@craeft/engine/dist/data";

import { Equipment as EquipmentObj } from "@craeft/engine/dist/game";
import { Item } from "@craeft/engine/dist/items";
import React, { use, useState } from "react";

import ItemDescription from "../item/ItemDescription";
import ItemIcon from "../item/ItemIcon";
import { CraeftContext } from "../../provider/CraeftProvider";

interface EquipmentProps {
  readonly equipment: EquipmentObj;
}

export default function Equipment({ equipment }: EquipmentProps) {
  const { craeft } = use(CraeftContext);

  const [selectedItem, setSelectedItem] = useState<Item | undefined>();

  const onItemSelected = (item: Item) => {
    setSelectedItem((prevState) => {
      return prevState === item ? undefined : item;
    });
  };

  const unequip = (item: Item) => {
    craeft.unEquipItem(item);

    if (!item.isEquipped) {
      onItemSelected(item);
    }
  };

  return (
    <div className="rpgui-container framed-grey row equipment">
      <div>
        <strong>Equipment</strong>
      </div>

      <hr />

      <div className="columns">
        <div className="column">
          Head
          <br />
          {equipment[ArmorSlots.Head] ? (
            <ItemIcon
              item={equipment[ArmorSlots.Head]}
              isSelected={equipment[ArmorSlots.Head] === selectedItem}
              isSmall={true}
              onItemSelected={onItemSelected}
            />
          ) : (
            <span className="rpgui-icon helmet-slot" />
          )}
        </div>
        <div className="column">
          Body
          <br />
          {equipment[ArmorSlots.Body] ? (
            <ItemIcon
              item={equipment[ArmorSlots.Body]}
              isSelected={equipment[ArmorSlots.Body] === selectedItem}
              isSmall={true}
              onItemSelected={onItemSelected}
            />
          ) : (
            <span className="rpgui-icon armor-slot" />
          )}
        </div>
      </div>

      <div className="columns">
        <div className="column">
          Legs
          <br />
          {equipment[ArmorSlots.Legs] ? (
            <ItemIcon
              item={equipment[ArmorSlots.Legs]}
              isSelected={equipment[ArmorSlots.Legs] === selectedItem}
              isSmall={true}
              onItemSelected={onItemSelected}
            />
          ) : (
            <span className="rpgui-icon legs-slot" />
          )}
        </div>
        <div className="column">
          Feet
          <br />
          {equipment[ArmorSlots.Feet] ? (
            <ItemIcon
              item={equipment[ArmorSlots.Feet]}
              isSelected={equipment[ArmorSlots.Feet] === selectedItem}
              isSmall={true}
              onItemSelected={onItemSelected}
            />
          ) : (
            <span className="rpgui-icon shoes-slot" />
          )}
        </div>
      </div>

      <div className="columns">
        <div className="column">
          Left Hand
          <br />
          {equipment[WeaponSlots.LeftHand] ? (
            <ItemIcon
              item={equipment[WeaponSlots.LeftHand]}
              isSelected={equipment[WeaponSlots.LeftHand] === selectedItem}
              isSmall={true}
              onItemSelected={onItemSelected}
            />
          ) : (
            <span className="rpgui-icon weapon-slot" />
          )}
        </div>
        <div className="column">
          Right Hand
          <br />
          {equipment[WeaponSlots.RightHand] ? (
            <ItemIcon
              item={equipment[WeaponSlots.RightHand]}
              isSelected={equipment[WeaponSlots.RightHand] === selectedItem}
              isSmall={true}
              onItemSelected={onItemSelected}
            />
          ) : (
            <span className="rpgui-icon weapon-slot" />
          )}
        </div>
      </div>

      <div className="columns">
        <div className="column">
          Jewelry 1<br />
          <span className="rpgui-icon ring-slot" />
        </div>

        <div className="column">
          Jewelry 2<br />
          <span className="rpgui-icon ring-slot" />
        </div>
      </div>

      {selectedItem?.isEquipped ? (
        <div>
          <hr />

          <ItemDescription item={selectedItem} onUnequip={unequip} />
        </div>
      ) : null}
    </div>
  );
}
