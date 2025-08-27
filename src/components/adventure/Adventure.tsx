import { Boss } from "@craeft/engine/dist/boss";
import { config } from "@craeft/engine/dist/config";
import { craeft } from "@craeft/engine/dist/craeft";
import React, { useState } from "react";
import Logs from "../Logs";
import Map from "../map/Map";
import PlayerDescription from "../player/PlayerDescription";
import BossDescription from "./BossDesctiption";
import BossIcon from "./BossIcon";

export default function Adventure() {
  const [selected, setSelected] = useState<Boss>(craeft.bosses[0]);

  const fight = (boss: Boss) => {
    console.log(boss.name);
  };

  const selectBoss = (boss: Boss) => {
    setSelected(boss);
  };

  return (
    <div className="adventure frame">
      <div className="rpgui-container framed">
        <div className="row">
          <strong>Adventure</strong>
          <hr />
        </div>

        <div className="row">
          <div className="columns">
            <div className="column">
              <PlayerDescription player={craeft.player} />

              <Logs />
            </div>

            <div className="column">
              <Map />
            </div>

            <div className="column">
              {config.showBossScreen ? (
                <>
                  <div className="boss-name">
                    <span>{selected.name}</span>
                  </div>

                  <div>
                    {craeft.bosses.map((boss) => {
                      return (
                        <BossIcon
                          key={`boss-${boss.name}`}
                          type={boss.type}
                          isDead={boss.dead}
                          isSelected={boss === selected}
                          onClick={() => selectBoss(boss)}
                        />
                      );
                    })}
                  </div>

                  <BossDescription
                    boss={selected}
                    fight={() => fight(selected)}
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
