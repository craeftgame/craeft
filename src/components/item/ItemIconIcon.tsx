import {
  ArmorSlots,
  ItemCategories,
  ResourceTypes,
} from "@craeft/engine/dist/data";
import { Armor, Item } from "@craeft/engine/dist/items";
import React from "react";
import { PreItem } from "@craeft/engine/dist/interfaces";

interface ItemIconIconProps {
  readonly item: Item | PreItem;
  readonly isSmall: boolean | undefined;
  readonly isBroken: boolean | undefined;
}

export default function ItemIconIcon({
  item,
  isSmall,
  isBroken,
}: ItemIconIconProps) {
  const itemClasses = ["rpgui-icon"];

  if (isBroken) {
    itemClasses.push("broken");
  }

  if (isSmall) {
    itemClasses.push("icon-small");
  }

  // evaluate item type
  if (item.category === ItemCategories.Weapon) {
    itemClasses.push("sword");
  } else if (
    item.category === ItemCategories.Armor &&
    item instanceof Armor &&
    !item.delay.isDelaying
  ) {
    if (item.slot === ArmorSlots.Head) {
      itemClasses.push("helmet");
    } else if (item.slot === ArmorSlots.Feet) {
      itemClasses.push("shoe");
    } else if (item.slot === ArmorSlots.Legs) {
      itemClasses.push("legs");
    } else if (item.slot === ArmorSlots.Body) {
      itemClasses.push("armor");
    } else {
      itemClasses.push("shield");
    }
  } else {
    itemClasses.push("shield");
  }

  // evaluate material
  if (item.material === ResourceTypes.Wood) {
    itemClasses.push("wood");
  } else if (item.material === ResourceTypes.Metal) {
    itemClasses.push("metal");
  } else if (item.material === ResourceTypes.Cloth) {
    itemClasses.push("cloth");
  } else if (item.material === ResourceTypes.Gemstone) {
    itemClasses.push("gemstone");
  }

  return <div className={itemClasses.join(" ")} />;
}
