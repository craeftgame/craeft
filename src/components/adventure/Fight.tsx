import { Boss } from "@craeft/engine/dist/boss";
import { WeaponSlots } from "@craeft/engine/dist/data";
import React, { use } from "react";
import ItemIconIcon from "../item/ItemIconIcon";
import { CraeftContext } from "../../provider/CraeftProvider";

interface FightProps {
  readonly boss: Boss;
}

export default function Fight({ boss }: FightProps) {
  const { craeft } = use(CraeftContext);

  return (
    <div>
      <div>
        <span>{boss.name}</span> vs. <span>{craeft.player.name}</span>
      </div>

      <div className="row fight">
        <div className="columns nowrap">
          <div className="column">
            <span className="icon fight-item left">
              <i className={`fas fa-${boss.type} fa-2x`} />
            </span>
          </div>

          <div className="column">
            <div className="sparks">
              <span className="spark">*</span>
              <span className="spark">*</span>
              <span className="spark">*</span>
              <span className="spark">*</span>
              <span className="spark">*</span>
            </div>

            <div className="icon fight-item middle">
              <i className="fas fa-bolt fa-4x" />
            </div>
          </div>

          <div className="column">
            <div className="fight-item right">
              {craeft.player.equipment[WeaponSlots.RightHand] ? (
                <ItemIconIcon
                  item={craeft.player.equipment[WeaponSlots.RightHand]}
                  isSmall={true}
                  isBroken={false}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
