import { Boss } from "@craeft/engine/dist/boss";
import React, { useState } from "react";
import Attribute from "../utility/Attribute";
import Gauge from "../utility/Gauge";
import Fight from "./Fight";

interface BossDescriptionProps {
  boss: Boss;
  fight: () => void;
}

export default function BossDescription({ boss, fight }: BossDescriptionProps) {
  const [isFighting, setIsFighting] = useState<boolean>(false);

  const startFight = () => {
    setIsFighting((isFighting) => !isFighting);

    fight();
  };

  return (
    <div className="rpgui-container framed-grey boss-info">
      <div className="columns">
        <div className="column">
          <span>
            <strong> Level:</strong> {boss.level}
          </span>
          <hr />
        </div>

        <div className="column">
          <Gauge
            color="red"
            label="HP"
            current={boss.hpCurrent}
            max={boss.hpMax}
          />
        </div>
      </div>

      <div className="boss-parameters">
        <div>
          <Attribute label="Str" value={13} />
          <Attribute label="Vit" value={8} />
          <Attribute label="Int" value={1} />
          <Attribute label="Dex" value={34} />
        </div>

        <div>
          <Attribute label="ATk" value={40} />
          <Attribute label="Matk" value={3} />
          <Attribute label="Def" value={9} />
          <Attribute label="Mdef" value={7} />
        </div>
      </div>

      <div>
        {!isFighting ? (
          <button className="rpgui-button" onClick={startFight}>
            <span>Fight!</span>
          </button>
        ) : (
          <Fight boss={boss} />
        )}
      </div>
    </div>
  );
}
