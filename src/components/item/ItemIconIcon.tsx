import { ItemCategories, ResourceTypes } from "@craeft/engine/dist/data";
import { Item, PreItem } from "@craeft/engine/dist/items";
import React from "react";

interface ItemIconIconProps {
  readonly item: Item | PreItem;
  readonly isSmall: boolean | undefined;
}

export default function ItemIconIcon({ item, isSmall }: ItemIconIconProps) {
  const itemClasses = ["rpgui-icon"];

  if (isSmall) {
    itemClasses.push("icon-small");
  }

  // evaluate item type
  if (item.category === ItemCategories.Weapon) {
    itemClasses.push("sword");
  } else if (item.category === ItemCategories.Armor) {
    itemClasses.push("shield");
  }

  // evaluate material
  if (item.material === ResourceTypes.Wood) {
    itemClasses.push("wood");
  } else if (item.material === ResourceTypes.Metal) {
    itemClasses.push("metal");
  } else if (item.material === ResourceTypes.Cloth) {
    itemClasses.push("cloth");
  } else if (item.material === ResourceTypes.Diamond) {
    itemClasses.push("diamond");
  }

  return <div className={itemClasses.join(" ")} />;
}
