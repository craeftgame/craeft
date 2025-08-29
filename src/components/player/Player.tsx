import { Player as PlayerObj } from "@craeft/engine/dist/game";
import React from "react";
import Logs from "../Logs";
import Equipment from "./Equipment";
import PlayerDescription from "./PlayerDescription";

interface PlayerProps {
  readonly player: PlayerObj;
}

export default function Player({ player }: PlayerProps) {
  return (
    <div className="rpgui-container framed player">
      <div className="row">
        <strong>Cräfting</strong>
        <hr />
      </div>

      <div className="row">
        <div className="columns">
          <div className="column">
            <PlayerDescription player={player} />

            <Logs />
          </div>

          {/* <div className="column is-one-fifth">fu</div> */}

          <div className="column">
            <Equipment equipment={player.equipment} />
          </div>
        </div>
      </div>
    </div>
  );
}
