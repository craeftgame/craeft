import React from "react";

interface AttributeProps {
  readonly label: string;
  readonly value: string | number;
  readonly value2?: string | number;
  readonly value3?: number;
  readonly colorClass?: string;
}

export default function Attribute({
  label,
  value,
  value2,
  value3,
  colorClass,
}: AttributeProps) {
  let cc = undefined;
  if (value3 && value3 < 0) {
    cc = "red";
  } else if (value3 && value3 > 0) {
    cc = "green";
  }

  return (
    <>
      <div className="attribute-label">{label}:&nbsp;</div>

      <span className={colorClass}>{value.toLocaleString()}</span>

      {value2 ? (
        <span className={colorClass}>-{value2.toLocaleString()}&nbsp;</span>
      ) : (
        <>&nbsp;</>
      )}

      {value3 ? (
        <span className={cc}>
          ({value3 > 0 ? "+" : null}
          {value3.toLocaleString()})&nbsp;
        </span>
      ) : null}
    </>
  );
}
