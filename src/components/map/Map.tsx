import { craeft } from "@craeft/engine/dist/craeft";
import React, { useCallback, useEffect } from "react";

export default function MapComponent() {
  const move = useCallback((direction: string) => {
    craeft.move(direction);
  }, []);

  const keyPressed = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
        case "s":
        case "S":
          move("down");
          event.preventDefault();
          break;

        case "ArrowUp":
        case "w":
        case "W":
          move("up");
          event.preventDefault();
          break;

        case "ArrowRight":
        case "d":
        case "D":
          move("right");
          event.preventDefault();
          break;

        case "ArrowLeft":
        case "a":
        case "A":
          move("left");
          event.preventDefault();
          break;

        default:
          break;
      }
    },
    [move],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPressed);

    return () => {
      document.removeEventListener("keydown", keyPressed);
    };
  }, [keyPressed]);

  return (
    <div className="rpgui-container framed-grey">
      <div className="rpgui-center nowrap map-wrap">
        {craeft.map?.getViewport().map((row, ri) => {
          return (
            <div key={`map-row-${ri}`} className="map-row nowrap">
              {row.map((cell, ci) => {
                return (
                  <div
                    key={`cell-${ri}-${ci}`}
                    className={`map-cell terrain-${cell.terrain}`}
                  >
                    {cell.playerIsHere ? (
                      <div
                        className={`map-player-marker ${craeft.map?.location.facing === "left" ? "ltr" : ""}`}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="control">
          <div className="controls left" onClick={() => move("left")}>
            <div className="icon">
              <i className="rpgui-cursor-point fas fa-caret-left fa-2x" />
            </div>
          </div>
          <div className="controls up" onClick={() => move("up")}>
            <div className="icon">
              <i className="rpgui-cursor-point fas fa-caret-up fa-2x" />
            </div>
          </div>
          <div className="controls right" onClick={() => move("right")}>
            <div className="icon">
              <i className="rpgui-cursor-point fas fa-caret-right fa-2x" />
            </div>
          </div>
          <div className="controls down" onClick={() => move("down")}>
            <div className="icon">
              <i className="rpgui-cursor-point fas fa-caret-down fa-2x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
