import type { Item } from "@craeft/engine/dist/game";
import { Craefter, Resources } from "@craeft/engine/dist/game";
import { ResourceTypes } from "@craeft/engine/dist/data";
import { capitalizeFirstLetter } from "@craeft/engine/dist/tools/strings";
import React, { use, useEffect, useState } from "react";
import CraefterDescription from "../craefter/CraefterDescription";
import PreItemDescription from "../item/PreItemDescription";

import Slider from "../utility/Slider";
import { CraeftContext } from "../../provider/CraeftProvider";
import { toEnum } from "@craeft/engine/dist/tools";
import type { PreItem } from "@craeft/engine/dist/interfaces";

interface CraeftingWindowProps {
  readonly craefter: Craefter;
  readonly availableResources: Resources;
  readonly itemAdded: (item: Item, resources: Resources) => void;
}

export default function CraeftingWindow({
  craefter,
  availableResources,
  itemAdded,
}: CraeftingWindowProps) {
  const { craeft } = use(CraeftContext);
  const [preItem, setPreItem] = useState<PreItem | undefined>();
  const [resources, setResources] = useState<Resources>(
    new Resources({ craeft }),
  );

  useEffect(() => {}, []);

  useEffect(() => {
    setPreItem(
      craefter.evaluateItem({
        resources,
      }),
    );
  }, [craefter, resources]);

  const updateResource = (which: ResourceTypes, value: number) => {
    setResources((prevState) => {
      // load current resources
      const res = new Resources({ craeft }).add(prevState);

      // update resources
      res[which] = value;

      return res;
    });
  };

  const craeftItem = () => {
    if (resources.sum() > 0) {
      // cräft the item
      const item = craefter.craeftItem({
        resources: resources,
      });

      itemAdded(item, resources);
    }
  };

  return (
    <div className="rpgui-container framed craeft-window">
      <div className="row">
        <strong>Cräft!</strong>
        <hr />
      </div>

      <CraefterDescription craefter={craefter} />

      <div className="row">
        {Object.keys(availableResources).map((key, index) => {
          const name = toEnum(ResourceTypes, key);
          if (!name) return;

          const available = availableResources[name];
          if (!available) return;

          const selectedAmount = resources[name];

          return (
            <div key={`resource-slider-${index}`}>
              <span>{selectedAmount.toLocaleString()}</span>
              &nbsp; x {capitalizeFirstLetter(name)}
              <Slider
                step={1}
                min={0}
                max={available}
                defaultValue={selectedAmount}
                onValueChange={(value) => updateResource(name, value)}
              />
            </div>
          );
        })}
      </div>

      {preItem ? <PreItemDescription preItem={preItem} /> : null}

      {Craefter.calculateExhaustion(resources) >= craefter.staCurrent ? (
        <div className="rpgui-center">
          <div>
            <strong className="red">Warning!</strong>
          </div>
          This item could lead to the death of your Cräfter!
        </div>
      ) : null}

      <div className="row">
        <button
          onClick={craeftItem}
          type="button"
          className={`rpgui-button is-big ${resources.sum() < 1 ? "rpgui-disabled" : ""}`}
        >
          <span>Cräft!</span>
        </button>
      </div>
    </div>
  );
}
