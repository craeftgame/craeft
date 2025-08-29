import React from "react";

interface AttributeProps {
  readonly label: string;
  readonly value: string | number;
  readonly value2?: string | number;
}

export default function Attribute({ label, value, value2 }: AttributeProps) {
  return (
    <>
      <div className="attribute-label">{label}:&nbsp;</div>

      <span>{value.toLocaleString()}</span>

      {value2 ? <span>-{value2.toLocaleString()}&nbsp;</span> : <>&nbsp;</>}
    </>
  );
}
