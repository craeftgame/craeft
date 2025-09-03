import { Armor, Item, Weapon } from "@craeft/engine/dist/items";
import React from "react";
import Attribute from "../utility/Attribute";

interface ItemStateProps {
  readonly item: Item | Weapon | Armor;
}

export default function ItemStats({ item }: ItemStateProps) {
  return (
    <div className="row">
      {item instanceof Weapon ? (
        <>
          {item.atk() ? (
            <div className="is-inline nowrap">
              <Attribute label="Atk" value={item.atk()} />
            </div>
          ) : null}

          {item.matk() ? (
            <div className="is-inline nowrap">
              <Attribute label="Matk" value={item.matk()} />
            </div>
          ) : null}
        </>
      ) : null}

      {item instanceof Armor ? (
        <>
          {item.def() ? (
            <div className="is-inline nowrap">
              <Attribute label="Def" value={item.def()} />
            </div>
          ) : null}
          {item.mdef() ? (
            <div className="is-inline nowrap">
              <Attribute label="Mdef" value={item.mdef()} />
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
