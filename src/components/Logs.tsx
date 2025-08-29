import { craeft } from "@craeft/engine/dist/craeft";
import React from "react";

export default function Logs() {
  return (
    <div className="rpgui-container framed-grey logs">
      {craeft.logs.slice(-4).map((log, index) => {
        return <div key={`logs-${index}`}>{log}</div>;
      })}
    </div>
  );
}
