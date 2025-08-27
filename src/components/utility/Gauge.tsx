import React from "react";
import Attribute from "./Attribute";
import Progress from "./Progress";

interface GaugeProps {
  label: string;
  current: number;
  color?: string;
  max: number;
}

export default function Gauge({ label, current, color, max }: GaugeProps) {
  return (
    <div className="row nowrap">
      {label ? (
        <Attribute
          label={label}
          value={`${Math.floor(current).toLocaleString()}/${Math.floor(max).toLocaleString()}`}
        />
      ) : null}

      <Progress
        color={color}
        filled={(100 / max) * current}
        showPercent={true}
      />
    </div>
  );
}
