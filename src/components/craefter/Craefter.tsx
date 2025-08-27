import { Craefter as CraefterObj } from "@craeft/engine/dist/craefter";
import React from "react";
import CraefterDescription from "./CraefterDescription";

interface CraefterProps {
  craefter?: CraefterObj;
  openCraeftDialog: (craefter?: CraefterObj) => void;
  canCraeft: boolean;
  bury: (craefter: CraefterObj) => void;
}

export default function Craefter({
  craefter,
  openCraeftDialog,
  canCraeft,
  bury,
}: CraefterProps) {
  const classNames = ["rpgui-container", "framed-grey", "craefter", "row"];

  if (!craefter) return;

  return (
    <div className={classNames.join(" ")}>
      <div className={craefter?.dead ? "rpgui-disabled" : ""}>
        <CraefterDescription craefter={craefter} />

        <div className={"row"}>
          {!craefter?.dead ? (
            <button
              onClick={() => openCraeftDialog(craefter)}
              type="button"
              className="rpgui-button"
              disabled={
                !canCraeft || craefter?.delay.isDelaying || craefter?.dead
              }
            >
              <span className="icon">
                <i className="fas fa-hammer" />
              </span>

              <span>
                &nbsp;
                {craefter?.delay.isDelaying
                  ? craefter?.delay.timer.getTimeoutString()
                  : "Cräft!"}
              </span>
            </button>
          ) : null}
        </div>
      </div>

      {craefter?.dead ? (
        <button
          className="rpgui-button"
          type="button"
          onClick={() => craefter && bury(craefter)}
        >
          <span className="icon">
            <i className="fas fa-skull-crossbones" />
          </span>

          <span>&nbsp;Bury!</span>
        </button>
      ) : null}
    </div>
  );
}
