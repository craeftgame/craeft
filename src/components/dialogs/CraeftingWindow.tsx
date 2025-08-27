import { Craefter } from "@craeft/engine/dist/craefter";
import { ResourceTypes } from "@craeft/engine/dist/data";
import { Resources } from "@craeft/engine/dist/game";
import { Item, PreItem } from "@craeft/engine/dist/items";
import { capitalizeFirstLetter } from "@craeft/engine/dist/tools/strings";
import React, { useEffect, useState } from "react";
import CraefterDescription from "../craefter/CraefterDescription";
import PreItemDescription from "../item/PreItemDescription";

import Slider from "../utility/Slider";

interface CraeftingWindowProps {
  craefter: Craefter;
  availableResources: Resources;
  itemAdded: (item: Item, resources: Resources) => void;
}

export default function CraeftingWindow({
  craefter,
  availableResources,
  itemAdded,
}: CraeftingWindowProps) {
  const [preItem, setPreItem] = useState<PreItem | undefined>(undefined);
  const [resources, setResources] = useState<Resources>(
    new Resources({
      initialResources: 0,
      resources: {},
    }),
  );

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
      const res = new Resources().add(prevState);

      // update resources
      res[which] = value;

      return res;
    });
  };

  const craeft = () => {
    if (resources.sum() > 0) {
      // cräft the item
      const item = craefter.craeft({
        resources: resources,
      });

      itemAdded(item, resources);
    }
  };

  return (
    <div className="rpgui-container framed craeft-window">
      <div className={"row"}>
        <strong>Cräft!</strong>
        <hr />
      </div>

      <CraefterDescription craefter={craefter} />

      <div className={"row"}>
        {Object.keys(availableResources).map((key, index) => {
          const name = key as ResourceTypes;
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

      <div className="row">
        <button
          onClick={craeft}
          className={`rpgui-button is-big ${resources.sum() < 1 ? "rpgui-disabled" : ""}`}
        >
          <span>Cräft!</span>
        </button>
      </div>
    </div>
  );
}
