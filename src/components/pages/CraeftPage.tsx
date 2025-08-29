"use client";

import Craeft, { craeft } from "@craeft/engine/dist/craeft";
import React, { useEffect, useReducer, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Adventure from "../../components/adventure/Adventure";
import CraefterList from "../../components/craefter/CraefterList";
import Farm from "../../components/Farm";
import Items from "../../components/item/Items";
import Dead from "../../components/player/Dead";

// game
import Player from "../../components/player/Player";

export default function CraeftPage() {
  const [, forceUpdate] = useReducer((tick) => tick + 1, 0);

  const [view, setView] = useState<number>(1);

  if (typeof window !== "undefined") {
    window.onbeforeunload = () => {
      Craeft.saveState();
    };
  }

  Craeft.loadState();

  useEffect(() => {
    window.scrollTo(0, 0);

    craeft.start({
      onTick: () => {
        // force update of the UI
        forceUpdate();
      },
      onUpdate: () => {
        // force update of the UI
        forceUpdate();
      },
    });

    return () => {
      // stop, in the name of ...
      craeft.stop();
      Craeft.saveState();
    };
  }, []);

  return (
    <div className="craeft">
      {craeft.player.isDead ? <Dead /> : null}

      <ReactTooltip
        id="tooltip-adventure"
        place="bottom"
        float={true}
        className="rpgui-container framed is-size-5"
        style={{ zIndex: 10000 }}
      >
        Hey {craeft.player.name},<br />
        you have to be level 10
        <br />
        to go on an adventure!
      </ReactTooltip>

      <div className={craeft.player.isDead ? "rpgui-disabled" : ""}>
        <div className="row">
          <div className="rpgui-button golden top-bar">
            <button
              className={`rpgui-button golden ${view === 1 ? "down" : ""}`}
              onClick={() => setView(1)}
              type="button"
            >
              <span>Cräfting</span>
            </button>

            <div
              className={`is-inline-block ${craeft.player.level < 10 ? "rpgui-disabled disabled" : ""}`}
            >
              <button
                disabled={craeft.player.level < 10}
                className={`rpgui-button golden ${view === 2 ? "down" : ""}`}
                onClick={() => (craeft.player.level > 9 ? setView(2) : null)}
                type="button"
                data-tooltip-id={
                  craeft.player.level < 10 ? "tooltip-adventure" : undefined
                }
              >
                <span>Adventure</span>
              </button>
            </div>
          </div>
        </div>

        {view === 1 ? (
          <div>
            <Player player={craeft.player} />

            <div className="craefting-interface columns">
              <CraefterList
                resources={craeft.resources}
                craefters={craeft.craefters}
              />

              <Farm />

              <Items items={craeft.items} />
            </div>
          </div>
        ) : null}

        {view === 2 ? <Adventure /> : null}
      </div>
    </div>
  );
}
