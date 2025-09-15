import { Player } from "@craeft/engine/dist/game";
import React, { use, useCallback } from "react";
import Attribute from "../utility/Attribute";
import Gauge from "../utility/Gauge";
import { CraeftContext } from "../../provider/CraeftProvider";
import Craeft from "@craeft/engine/dist/craeft";

interface PlayerDescriptionProps {
  readonly player: Player;
}

export default function PlayerDescription({ player }: PlayerDescriptionProps) {
  const { setCraeft } = use(CraeftContext);

  const reset = useCallback(() => {
    setCraeft(new Craeft());
  }, [setCraeft]);

  return (
    <>
      <div className="row">
        <div>
          <Attribute label={player.className()} value={player.name} />

          {player.level < 2 ? (
            <i className="rpgui-cursor-point fas fa-rotate" onClick={reset} />
          ) : null}
        </div>

        <div>
          <Attribute label="Str" value={player.str()} />
          <Attribute label="Vit" value={player.vit()} />
          <Attribute label="Int" value={player.int()} />
          <Attribute label="Dex" value={player.dex()} />
          <Attribute label="Agi" value={player.agi()} />
        </div>

        <div>
          <Attribute label="Atk" value={player.atk()} />
          <Attribute label="Matk" value={player.matk()} />
          <Attribute label="Def" value={player.def()} />
          <Attribute label="Mdef" value={player.mdef()} />
        </div>
      </div>

      <hr />

      <div className="row columns">
        <div className="column">
          <Attribute label="Level" value={player.level} />

          <hr />

          <Gauge label="EXP" max={player.expMax} current={player.expCurrent} />
        </div>

        <div className="column">
          <Gauge
            label="HP"
            color="red"
            max={player.hpMax}
            current={player.hpCurrent}
          />

          <Gauge
            label="STA"
            color="green"
            max={player.staMax}
            current={player.staCurrent}
          />
        </div>
      </div>
    </>
  );
}
