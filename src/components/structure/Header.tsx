import { config } from "@craeft/engine/dist/config";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className={"row craeft-logo"}>
      <Link href={"/"}>
        Cräft!
        {config.subLogo ? (
          <div className={"craeft-sub-logo"}>{config.subLogo}</div>
        ) : null}
      </Link>

      <hr className="golden" />
    </div>
  );
}
