import { Item } from "@craeft/engine/dist/items";
import React, { use } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ItemDetails from "./ItemDetails";
import ItemIconIcon from "./ItemIconIcon";
import { Mysterious } from "@craeft/engine/dist/data";
import { CraeftContext } from "../../provider/CraeftProvider";
import type { PreItem } from "@craeft/engine/dist/interfaces";

interface ItemIconProps {
  readonly item: Item | PreItem;
  readonly onItemSelected?: (item: Item) => void;
  readonly isSelected?: boolean;
  readonly isSmall?: boolean;
}

export default function ItemIcon({
  onItemSelected,
  item,
  isSelected,
  isSmall,
}: ItemIconProps) {
  const { craeft } = use(CraeftContext);

  const containerClasses = ["item-icon"];

  // item disabled?
  if (item instanceof Item && item.delay.isDelaying) {
    containerClasses.push("rpgui-disabled");
  } else if (item.rarity) {
    containerClasses.push(item.rarity.toString());
  }

  // item selected?
  if (isSelected) {
    containerClasses.push("icon-selected");
  }

  return (
    <>
      <ReactTooltip
        id={`tooltip-${item instanceof Item && item.id}`}
        place="bottom"
        float={true}
        className="rpgui-container framed is-size-5 rpgui-center tooltip"
      >
        {item instanceof Item ? (
          <>
            {item.delay.isDelaying ? (
              Mysterious
            ) : (
              <ItemDetails
                item={item}
                compareItem={
                  !item.isEquipped && item.slot
                    ? craeft.player.equipment[item.slot]
                    : undefined
                }
              />
            )}
          </>
        ) : null}
      </ReactTooltip>

      <div
        className="rpgui-container rpgui-cursor-point framed-grey item-container"
        onClick={
          item instanceof Item ? () => onItemSelected?.(item) : undefined
        }
      >
        <div
          className={containerClasses.join(" ")}
          data-tooltip-id={
            item instanceof Item ? `tooltip-${item.id}` : undefined
          }
        >
          <ItemIconIcon
            item={item}
            isSmall={isSmall}
            isBroken={item instanceof Item ? item.isBroken : false}
          />

          {item instanceof Item && !item.delay.isDelaying ? (
            <span className="item-level">{item.level}</span>
          ) : null}

          {item instanceof Item && item.delay.isDelaying ? (
            <div className="item-timeout nowrap">
              <span>{item.delay.timer.getTimeoutString()}</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
