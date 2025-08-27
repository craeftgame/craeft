import { craeft } from "@craeft/engine/dist/craeft";
import { CraefterTypes } from "@craeft/engine/dist/data";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface AddCraeftersWindowProps {
  addCraefter: (craefter: CraefterTypes) => void;
}

export default function AddCraeftersWindow({
  addCraefter,
}: AddCraeftersWindowProps) {
  const addWC = () => {
    addCraefter(CraefterTypes.WeaponCraefter);
  };

  const addAC = () => {
    addCraefter(CraefterTypes.ArmorCraefter);
  };

  const style = {
    verticalAlign: "top",
    minWidth: "250px",
  };

  return (
    <div className="rpgui-container framed craefter-window">
      <ReactTooltip
        id="alchemist"
        place="bottom"
        float={true}
        className="rpgui-container framed is-size-5"
        style={{ zIndex: 10000 }}
      >
        Hey {craeft.player.name},<br />
        you have to be level 20
        <br />
        to hire Alchemist&apos;s!
      </ReactTooltip>

      <ReactTooltip
        id="jewelcraefter"
        place="bottom"
        float={true}
        className="rpgui-container framed is-size-5"
        style={{ zIndex: 10000 }}
      >
        Hey {craeft.player.name},<br />
        you have to be level 40
        <br />
        to hire Jewelcräfter!!
      </ReactTooltip>

      <div className={"row"}>
        <strong>Add Cräfter</strong>
        <hr />
      </div>

      <div className={"row"}>
        <div>
          <span className="rpgui-icon weapon-slot" />
          <button
            onClick={addWC}
            className="rpgui-button is-huge"
            style={style}
          >
            <span>Weaponcräfter</span>
          </button>
        </div>

        <div>
          <span className="rpgui-icon armor-slot" />
          <button onClick={addAC} className="rpgui-button is-big" style={style}>
            <span>Armorcräfter</span>
          </button>
        </div>

        <div className="rpgui-disabled">
          <span className="rpgui-icon potion-slot" />
          <button
            className="rpgui-button is-big"
            data-tooltip-id="alchemist"
            style={style}
          >
            <span>Alchemist</span>
          </button>
        </div>

        <div className="rpgui-disabled">
          <span className="rpgui-icon ring-slot" />
          <button
            className="rpgui-button is-big"
            data-tooltip-id="jewelcraefter"
            style={style}
          >
            <span>Jewelcräfter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
