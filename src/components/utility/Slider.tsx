import React, { useEffect, useRef, useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onValueChange: (value: number) => void;
}

export default function Slider({
  min,
  max,
  step,
  defaultValue,
  onValueChange,
}: SliderProps) {
  const [value, setValue] = useState<number>(defaultValue);
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const element = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const leftEdge = useRef<HTMLDivElement | null>(null);
  const rightEdge = useRef<HTMLDivElement | null>(null);

  const doSetValue = (value: number) => {
    setValue(value);
    onValueChange(value);
  };

  const slideTo = (pos: number) => {
    if (track.current !== null) {
      const stepWidth = pos / track.current.offsetWidth;
      const value = Math.round(stepWidth * (max - min));
      doSetValue(min + value);
    }
  };

  const move = (pos: number) => {
    if (mouseDown) {
      slideTo(pos);
    }
  };

  const removeMouse = () => {
    setMouseDown(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", removeMouse, false);

    return () => {
      window.removeEventListener("mouseup", removeMouse);
    };
  }, []);

  const edgeWidth = !leftEdge.current ? 20 : leftEdge.current.offsetWidth;

  const trackWith = !track.current ? 20 : track.current.offsetWidth;
  const tempStep = (trackWith - edgeWidth * 2) / (max - min);

  const stepWidth = value * tempStep;
  const left = Math.floor(edgeWidth / 2 + stepWidth) + "px";

  return (
    <div ref={element}>
      <input
        type="range"
        style={{ display: "none" }}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => doSetValue(Number(event.target.value))}
      />

      <div className="rpgui-slider-container">
        <div
          className="rpgui-slider-track"
          ref={track}
          onMouseDown={() => setMouseDown(true)}
          onMouseUp={() => setMouseDown(false)}
          onMouseMove={(event) =>
            move(event.nativeEvent.offsetX || event.nativeEvent.layerX)
          }
          onClick={(event) =>
            slideTo(event.nativeEvent.offsetX || event.nativeEvent.layerX)
          }
        ></div>

        <div
          className="rpgui-slider-left-edge"
          ref={leftEdge}
          onMouseDown={() => setMouseDown(true)}
          onClick={() => doSetValue(min)}
        >
          <div className="slider-edge-value">
            <span>{min.toLocaleString()}</span>
          </div>
        </div>

        <div
          className="rpgui-slider-right-edge"
          ref={rightEdge}
          onMouseDown={() => setMouseDown(true)}
          onClick={() => doSetValue(max)}
        >
          <div className="slider-edge-value rtl">
            <span>{max.toLocaleString()}</span>
          </div>
        </div>

        <div
          className="rpgui-slider-thumb"
          onMouseDown={() => setMouseDown(true)}
          style={{
            left,
          }}
        ></div>
      </div>
    </div>
  );
}
