import { Armor, Item, Weapon } from "@craeft/engine/dist/items";
import React from "react";
import Attribute from "../utility/Attribute";

interface ItemStateProps {
  readonly item: Item | Weapon | Armor;
  readonly compareItem?: Item | Weapon | Armor;
}

export default function ItemStats({ item, compareItem }: ItemStateProps) {
  return (
    <div className="row">
      {item instanceof Weapon ? (
        <>
          {item.atk() ||
          (compareItem &&
            compareItem instanceof Weapon &&
            compareItem.atk()) ? (
            <div className="is-inline nowrap">
              <Attribute
                label="Atk"
                value={item.atk()}
                value3={
                  compareItem && compareItem instanceof Weapon
                    ? item.atk() - compareItem.atk()
                    : undefined
                }
              />
            </div>
          ) : null}

          {item.matk() ||
          (compareItem &&
            compareItem instanceof Weapon &&
            compareItem.matk()) ? (
            <div className="is-inline nowrap">
              <Attribute
                label="Matk"
                value={item.matk()}
                value3={
                  compareItem && compareItem instanceof Weapon
                    ? item.matk() - compareItem.matk()
                    : undefined
                }
              />
            </div>
          ) : null}
        </>
      ) : null}

      {item instanceof Armor ? (
        <>
          {item.def() ||
          (compareItem && compareItem instanceof Armor && compareItem.def()) ? (
            <div className="is-inline nowrap">
              <Attribute
                label="Def"
                value={item.def()}
                value3={
                  compareItem && compareItem instanceof Armor
                    ? item.def() - compareItem.def()
                    : undefined
                }
              />
            </div>
          ) : null}
          {item.mdef() ||
          (compareItem &&
            compareItem instanceof Armor &&
            compareItem.mdef()) ? (
            <div className="is-inline nowrap">
              <Attribute
                label="Mdef"
                value={item.mdef()}
                value3={
                  compareItem && compareItem instanceof Armor
                    ? item.mdef() - compareItem.mdef()
                    : undefined
                }
              />
            </div>
          ) : null}
        </>
      ) : null}

      <div>
        {item.str() || compareItem?.str() ? (
          <Attribute
            label="Str"
            value={`+${item.str()}`}
            colorClass="green"
            value3={compareItem ? item.str() - compareItem.str() : undefined}
          />
        ) : null}
        {item.vit() || compareItem?.vit() ? (
          <Attribute
            label="Vit"
            value={`+${item.vit()}`}
            colorClass="green"
            value3={compareItem ? item.vit() - compareItem.vit() : undefined}
          />
        ) : null}
        {item.int() || compareItem?.int() ? (
          <Attribute
            label="Int"
            value={`+${item.int()}`}
            colorClass="green"
            value3={compareItem ? item.int() - compareItem.int() : undefined}
          />
        ) : null}
        {item.dex() || compareItem?.dex() ? (
          <Attribute
            label="Dex"
            value={`+${item.dex()}`}
            colorClass="green"
            value3={compareItem ? item.dex() - compareItem.dex() : undefined}
          />
        ) : null}
        {item.agi() || compareItem?.agi() ? (
          <Attribute
            label="Agi"
            value={`+${item.agi()}`}
            colorClass="green"
            value3={compareItem ? item.agi() - compareItem.agi() : undefined}
          />
        ) : null}
      </div>
    </div>
  );
}
