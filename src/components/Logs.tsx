import React, { use } from "react";
import { CraeftContext } from "../provider/CraeftProvider";

export default function Logs() {
  const { craeft } = use(CraeftContext);

  return (
    <div className="rpgui-container framed-grey logs">
      {craeft.logs.slice(-4).map((log, index) => {
        return <div key={`logs-${index}`}>{log}</div>;
      })}
    </div>
  );
}
