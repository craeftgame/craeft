import { Armor, Item, Weapon } from "@craeft/engine/dist/items";
import React from "react";
import Attribute from "../utility/Attribute";

interface ItemStateProps {
  item: Item | Weapon | Armor;
}

export default function ItemStats({ item }: ItemStateProps) {
  return (
    <div className="row">
      {item instanceof Weapon ? (
        <div className="is-inline nowrap">
          <Attribute label="Atk" value={item.atk()} />
        </div>
      ) : null}

      {item instanceof Weapon ? (
        <div className="is-inline nowrap">
          <Attribute label="Matk" value={item.matk()} />
        </div>
      ) : null}

      {item instanceof Armor ? (
        <div className="is-inline nowrap">
          <Attribute label="Def" value={item.def()} />
        </div>
      ) : null}

      {item instanceof Armor ? (
        <div className="is-inline nowrap">
          <Attribute label="Mdef" value={item.mdef()} />
        </div>
      ) : null}
    </div>
  );
}
