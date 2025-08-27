import { craeft } from "@craeft/engine/dist/craeft";
import { ResourceTypes } from "@craeft/engine/dist/data";
import { capitalizeFirstLetter } from "@craeft/engine/dist/tools";
import React from "react";

export default function Farm() {
  return (
    <div className="farm column frame">
      <div className="rpgui-container framed">
        <div className={"row"}>
          <strong>Resources</strong>
          <hr />
        </div>

        {craeft.resources.sum() > 0 ? (
          <div className="rpgui-container framed-grey resources">
            {Object.keys(craeft.resources).map((key) => {
              const material = key as ResourceTypes;

              if (craeft.resources[material] === 0) return;

              return (
                <div className="columns" key={`material-${key}`}>
                  <div className="column">
                    {capitalizeFirstLetter(material)}:
                  </div>
                  <div className="column rtl">
                    <span>
                      {craeft.resources[material]?.toLocaleString()}
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

        <div className={"row"}>
          <button
            className="rpgui-button"
            onClick={() => craeft.startFarming()}
            type="button"
            disabled={
              craeft.player.isFarming ||
              craeft.player.staCurrent < 1 ||
              craeft.player.dead
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
