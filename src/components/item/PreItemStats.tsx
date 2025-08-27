import type { PreItem } from "@craeft/engine/dist/items";
import React from "react";
import Attribute from "../utility/Attribute";

interface PreItemStatsProps {
  preItem: PreItem;
}

export default function PreItemStats({ preItem }: PreItemStatsProps) {
  return (
    <div className="row">
      {preItem.atk ? (
        <div className="is-inline nowrap">
          <Attribute label="Atk" value={preItem.atk} value2={preItem.atkMax} />
        </div>
      ) : null}

      {preItem.matk ? (
        <div className="is-inline nowrap">
          <Attribute
            label="Matk"
            value={preItem.matk}
            value2={preItem.matkMax}
          />
        </div>
      ) : null}

      {preItem.def ? (
        <div className="is-inline nowrap">
          <Attribute label="Def" value={preItem.def} value2={preItem.defMax} />
        </div>
      ) : null}

      {preItem.mdef ? (
        <div className="is-inline nowrap">
          <Attribute
            label="Mdef"
            value={preItem.mdef}
            value2={preItem.mdefMax}
          />
        </div>
      ) : null}
    </div>
  );
}
