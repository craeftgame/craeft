import { Craefter as CraefterObj } from "@craeft/engine/dist/game";
import React from "react";
import CraefterDescription from "./CraefterDescription";

interface CraefterProps {
  readonly craefter?: CraefterObj;
  readonly openCraeftDialog: (craefter?: CraefterObj) => void;
  readonly canCraeft: boolean;
  readonly bury: (craefter: CraefterObj) => void;
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
      <div className={craefter?.isDead ? "rpgui-disabled" : ""}>
        <CraefterDescription craefter={craefter} />

        <div className="row">
          {!craefter?.isDead ? (
            <button
              onClick={() => openCraeftDialog(craefter)}
              type="button"
              className="rpgui-button"
              disabled={
                !canCraeft || craefter?.delay.isDelaying || craefter?.isDead
              }
            >
              <span className="icon">
                <i className="fas fa-hammer" />
              </span>

              <span>
                &nbsp;
                {craefter?.delay.isDelaying
                  ? craefter?.delay.timer?.getTimeoutString()
                  : "Cräft!"}
              </span>
            </button>
          ) : null}
        </div>
      </div>

      {craefter?.isDead ? (
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
