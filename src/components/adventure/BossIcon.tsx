import React from "react";

interface BossIconProps {
  readonly type: string;
  readonly isDead: boolean;
  readonly isSelected: boolean;
  readonly onClick: () => void;
}

export default function BossIcon({
  type,
  isDead,
  isSelected,
  onClick,
}: BossIconProps) {
  return (
    <div
      className="rpgui-container framed-grey boss-icon rpgui-cursor-point"
      onClick={onClick}
    >
      <div className={`boss-icon-wrap ${isSelected ? "icon-selected" : ""}`}>
        <div className="icon">
          <i className={`fas fa-${type} fa-2x`} />
        </div>

        {isDead ? (
          <div className="icon boss-dead">
            <i className="fas fa-skull" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
