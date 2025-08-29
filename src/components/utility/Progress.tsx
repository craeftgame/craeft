import React from "react";

interface ProgressProps {
  readonly color: string | undefined;
  readonly filled: number;
  readonly showPercent: boolean;
}

export default function Progress({
  color,
  filled,
  showPercent,
}: ProgressProps) {
  return (
    <div className={`rpgui-progress ${color}`}>
      <div className="rpgui-progress-track">
        {showPercent ? (
          <div className="progress-percent">
            <span className="is-size-6 rtl">
              {filled.toFixed(0).toLocaleString()}%
            </span>
          </div>
        ) : null}

        <div
          className={`rpgui-progress-fill ${color}`}
          style={{
            left: "0px",
            width: `${filled}%`,
          }}
        ></div>
      </div>

      <div className="rpgui-progress-left-edge" />

      <div className="rpgui-progress-right-edge" />
    </div>
  );
}
