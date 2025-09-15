import { Item } from "@craeft/engine/dist/items";
import React, { use, useState } from "react";
import ItemDescription from "./ItemDescription";
import ItemIcon from "./ItemIcon";
import { CraeftContext } from "../../provider/CraeftProvider";

interface ItemsProps {
  readonly items: Item[];
}

export default function Items({ items }: ItemsProps) {
  const { craeft } = use(CraeftContext);

  const [selectedItem, setSelectedItem] = useState<Item | undefined>();

  const onItemSelected = (item: Item) => {
    if (!item.delay.isDelaying) {
      let newSelectedItem: Item | undefined = item;

      if (selectedItem === item) {
        newSelectedItem = undefined;
      }

      setSelectedItem(newSelectedItem);
    }
  };

  const equip = (item: Item) => {
    craeft.equipItem(item);

    if (item.isEquipped) {
      setSelectedItem(undefined);
    }
  };

  const onDisentchant = (item: Item) => {
    craeft.disentchant(item);

    setSelectedItem(undefined);
  };

  return (
    <div className="items column frame">
      <div className="rpgui-container framed">
        <div className="row">
          <strong>Items</strong>
          <hr />
        </div>

        {selectedItem && !selectedItem["isEquipped"] ? (
          <div className="rpgui-container framed-grey item row">
            {selectedItem ? (
              <ItemDescription
                item={selectedItem}
                onEquip={equip}
                onDisentchant={onDisentchant}
              />
            ) : null}
          </div>
        ) : null}

        <div>
          {items.filter((item) => {
            return !item.isEquipped;
          }).length > 0 ? (
            items
              .filter((item) => {
                return !item.isEquipped;
              })
              .map((item, index) => {
                return (
                  <ItemIcon
                    key={index}
                    item={item}
                    isSelected={item === selectedItem}
                    isSmall={false}
                    onItemSelected={onItemSelected}
                  />
                );
              })
          ) : (
            <div className="row">go Cräft!</div>
          )}
        </div>
      </div>
    </div>
  );
}
