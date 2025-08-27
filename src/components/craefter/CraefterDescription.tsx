import { Craefter as CraefterObj } from "@craeft/engine/dist/craefter";
import { CraefterTypeNames } from "@craeft/engine/dist/data";
import React from "react";
import Attribute from "../utility/Attribute";
import Gauge from "../utility/Gauge";

interface CraefterDescriptionProps {
  craefter: CraefterObj;
}

export default function CraefterDescription({
  craefter,
}: CraefterDescriptionProps) {
  return (
    <div>
      <div className="row">
        <span>{CraefterTypeNames[craefter.type]}</span>
      </div>

      {!craefter.delay.isDelaying ? (
        <div className="row">
          Level {craefter.level}: <span>{craefter.name}</span>
        </div>
      ) : (
        "???"
      )}

      {!craefter.delay.isDelaying ? (
        <div>
          <div className="row">
            <div>
              <Attribute label="Str" value={craefter.str} />
              <Attribute label="Dex" value={craefter.dex} />
            </div>

            <div>
              <Attribute label="Int" value={craefter.int} />
              <Attribute label="Luk" value={craefter.luk} />
            </div>
          </div>

          <hr />

          <div className="row">
            <Gauge
              label="STA"
              color="green"
              current={craefter.staCurrent}
              max={craefter.staMax}
            />

            <Gauge
              label="EXP"
              current={craefter.expCurrent}
              max={craefter.expMax}
            />
          </div>

          <hr />
        </div>
      ) : null}
    </div>
  );
}
