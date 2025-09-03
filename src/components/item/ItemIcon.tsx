import { Item, PreItem } from "@craeft/engine/dist/items";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ItemDetails from "./ItemDetails";
import ItemIconIcon from "./ItemIconIcon";

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
        className="rpgui-container framed is-size-5 rpgui-center"
        style={{ zIndex: 10000 }}
      >
        {item instanceof Item ? (
          <>{item.delay.isDelaying ? "???" : <ItemDetails item={item} />}</>
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
