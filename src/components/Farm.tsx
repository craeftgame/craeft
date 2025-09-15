import { capitalizeFirstLetter } from "@craeft/engine/dist/tools";
import React, { use } from "react";
import { CraeftContext } from "../provider/CraeftProvider";

export default function Farm() {
  const { craeft } = use(CraeftContext);

  return (
    <div className="farm column frame">
      <div className="rpgui-container framed">
        <div className="row">
          <strong>Resources</strong>
          <hr />
        </div>

        {craeft.resources.sum() > 0 ? (
          <div className="rpgui-container framed-grey resources">
            {Object.entries(craeft.resources).map(([key, value]) => {
              if (typeof value !== "number" || value === 0) return;

              return (
                <div className="columns" key={`material-${key}`}>
                  <div className="column">{capitalizeFirstLetter(key)}:</div>
                  <div className="column rtl">
                    <span>
                      {value.toLocaleString()}
                      &nbsp;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="row">go Farm!</div>
        )}

        <div className="row">
          <button
            className="rpgui-button"
            onClick={() => craeft.startFarming()}
            type="button"
            disabled={
              craeft.player.isFarming ||
              craeft.player.staCurrent < 1 ||
              craeft.player.isDead
            }
          >
            <span className="icon">
              <i className="fas fa-tree" />
            </span>

            <span>
              &nbsp;
              {craeft.player.isFarming
                ? craeft.farm.timer.getTimeoutString()
                : "Farm!"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
