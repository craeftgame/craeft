import { Craefter } from "@craeft/engine/dist/craefter";
import { CraefterTypes } from "@craeft/engine/dist/data";
import React, { use } from "react";
import { CraeftContext } from "../../provider/CraeftProvider";

interface CraefterIconProps {
  readonly craefter: Craefter;
  readonly onCraefterSelect: (craefter: Craefter) => void;
  readonly isSelected: boolean;
}

export default function CraefterIcon({
  craefter,
  onCraefterSelect,
  isSelected,
}: CraefterIconProps) {
  const { craeft } = use(CraeftContext);

  const selectCraefter = () => {
    if (!craefter.delay.isDelaying) {
      onCraefterSelect(craefter);
    }
  };

  const classes = ["craefter-icon", "rpgui-cursor-point"];

  if (isSelected) {
    classes.push("craefter-icon-selected");
  }

  let disabled = "";
  if (craefter.isCraefting) {
    disabled = "rpgui-disabled";
  }

  return (
    <div
      className={classes.join(" ")}
      // @ts-expect-error disabled does not exist in div
      disabled={craefter.isCraefting}
      onClick={selectCraefter}
    >
      {craefter.type === CraefterTypes.WeaponCraefter ? (
        <div className={`rpgui-icon weapon-slot ${disabled}`} />
      ) : null}

      {craefter.type === CraefterTypes.ArmorCraefter ? (
        <div className={`rpgui-icon shield-slot ${disabled}`} />
      ) : null}

      {!craefter.delay.isDelaying ? (
        <span className="craefter-level">{craefter.level}</span>
      ) : null}

      {craefter.delay.isDelaying ? (
        <div className="craefter-timeout nowrap">
          <span>{craefter.delay.timer.getTimeoutString()}</span>
        </div>
      ) : null}

      {craefter.isCraefting ? (
        <div className="craefter-timeout craefter-timeout-item nowrap">
          <span>
            {craefter.itemId
              ? craeft.items
                  .findById(craefter.itemId)
                  ?.delay.timer.getTimeoutString()
              : null}
          </span>
        </div>
      ) : null}

      {craefter.isDead && !craefter.isCraefting ? (
        <div className="craefter-dead">
          <span className="icon">
            <i className="fas fa-skull" />
          </span>
        </div>
      ) : null}
    </div>
  );
}
