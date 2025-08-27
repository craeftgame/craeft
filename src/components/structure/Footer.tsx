import Link from "next/link";
import React from "react";
import Donate from "../../components/structure/Donate";

interface FooterProps {
  showDonate?: boolean;
}

export default function Footer({ showDonate }: FooterProps) {
  return (
    <div className="row footer">
      <hr className="golden" />

      {showDonate ? (
        <div className="columns">
          <div className="column">
            <Donate />
          </div>

          <div
            className="column"
            style={{
              textAlign: "left",
            }}
          >
            <Link href={"/about"}>About Cräft!</Link>
          </div>
        </div>
      ) : null}

      <div
        className="rpgui-center"
        style={{
          fontSize: "12px",
        }}
      >
        © 2019-2025{" "}
        <a href="https://umlaut.games" target="_blank" rel="noreferrer">
          Umlaut Games
        </a>{" "}
        — All Rights Reserved
      </div>
    </div>
  );
}
